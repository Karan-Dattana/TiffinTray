import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <form action="mailto: bhavdeepkaushal392@gmail.com" enctype="text/plain" method="post">
      
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        {/* <input type="text" placeholder="yourmail@gmail.com" /> */}
        <input type="text" placeholder="send your query!" />
        <button className="secondary-button">Submit</button>
      </div>
      </form>
    </div> 
  );
};

export default Contact;
