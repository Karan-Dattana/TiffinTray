import React from 'react'
import Layout from '../Components/Layout'
import classes from './listTiffin.module.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose, AiOutlineFileImage } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { logout } from '../redux/authSlice'
// import { request } from '../util/fetchAPI'
import { useEffect , useState} from 'react'
import { request } from '../util/fetchAPI'
import axios from "axios"

const ListTiffin = () => {
    const [state, setState] = useState({})
    const [photo, setPhoto] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [error, setError] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const { user, token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        setState(prev => {
          return {...prev, location: 'punjab', category: 'veg'}
        })
      }, [])

      window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
      }
    
      const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

      const handleState = (e) => {
        setState(prev => {
          return { ...prev, [e.target.name]: e.target.value }
        })
      }

      const handleListProperty = async (e) => {
        e.preventDefault()

        let filename = null
        if (photo) {
          const formData = new FormData()
          filename = crypto.randomUUID() + photo.name
          formData.append('filename', filename)
          formData.append('image', photo)
    
          const options = {
            "Authorization": `Bearer ${token}`,
          }
    
          const data = await request("/upload/image", 'POST', options, formData, true)
          console.log(data);
          // axios.post("http://localhost:5000/upload/image",{options , formData })
        } else {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 2500)
          return
        }
    
    
        try {
          if (Object.values(state).some((v) => !v) && Object.values(state).length < 7) {
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 2500)
            return
          }
    
          const options = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json'
          }
    
          const newProperty = await request("/tiffin", 'POST', options, { ...state, img: filename })
    
          setShowModal(false)
          setShowForm(false)
          // navigate(`/propertyDetail/${newProperty._id}`)
          navigate("/");
        } catch (error) {
          setError(true)
            setTimeout(() => {
              setError(false)
            }, 2500)
        }
      }
    
  return (
    <div>

        <Layout>
        <h1>List your tiffin service!</h1>


        {/* desktop listing */}
        <div className={classes.listPropertyForm} >
          <div className={classes.listPropertyWrapper} onClick={(e) => e.stopPropagation()}>
            <h2>List Tiffin Service</h2>
            <form onSubmit={handleListProperty}>
              <input value={state?.title} type="text" placeholder='Name' name="name" onChange={handleState} />
              <select value={state?.type} required name='category' onChange={handleState}>
                 <option disabled>Select Type</option>
                 <option value='veg'>Vegetarian</option>
                 <option value='non-veg'>Non-vegetarian</option>
              </select>
              <input value={state?.desc} type="text" placeholder='Desc' name="desc" onChange={handleState} />
              <select value={state?.continent} required name='location' onChange={handleState}>
              <option disabled >Select Location</option>
              <option value="punjab">Punjab</option>
              <option value="haryana">Haryana</option>
              <option value="himachal pradesh">Himachal Pradesh</option>
              <option value="delhi">Delhi</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="gujarat">Gujarat</option>
              </select>
              <input value={state?.price} type="number" placeholder='Price' name="price" onChange={handleState} />
              {/* <input value={state?.sqmeters} type="number" placeholder='Sq. meters' name="sqmeters" onChange={handleState} /> */}
              {/* <input value={state?.beds} type="number" placeholder='Beds' name="beds" step={1} min={1} onChange={handleState} /> */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '50%' }}>
                <label htmlFor='photo'>Food picture <AiOutlineFileImage /></label>
                <input
                  type="file"
                  id='photo'
                  style={{ display: 'none' }}
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
                {photo && <p>{photo.name}</p>}
              </div>
              <button>List Service</button>
            </form>
           
          </div>
        </div>
        </Layout>
    </div>
  )
}

export default ListTiffin