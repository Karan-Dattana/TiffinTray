import "./App.css";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NonVeg from "./pages/NonVeg";
import Subs from "./pages/Subs";
import Veg from "./pages/Veg";
import Tiffins from "./Components/tiffins/Properties"
import PropertyDetail from "./Components/propertyDetail/PropertyDetail"
import ListTiffin from "./pages/ListTiffin";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <BrowserRouter> */}

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/nonveg" element={<NonVeg />}/>
        <Route path="/veg" element={<Veg />}/>
        <Route path="/mysubscriptions" element={<Subs />}/>
        <Route path="/tiffins" element={<Tiffins />} />
        <Route path="/listTiffin" element={<ListTiffin />} />
        <Route path='/propertyDetail/:id' element={
          <>
            
            <PropertyDetail />
            
          </>
        } />
      </Routes>
      
      {/* </BrowserRouter> */}
      
    </div>
  );
}

export default App;
