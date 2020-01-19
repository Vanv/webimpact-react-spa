import React from 'react';
import Mailto from 'react-protected-mailto';

const Footer = () => (
  <footer className="text-muted">
  <div className="container">
    <p className="float-right">
      <a href="#">Back to top</a>
    </p>
    <p>Contact me on: <br />
    <Mailto
      email='vancretive@gmail.com'
      headers={
        {subject:'Website Enquiry'}
      }/> <br />
    M: <Mailto tel='021 104 6676' />
    </p>
    <p>@Copyright Web Impact 2019.</p>
  </div>
</footer>
);
export default Footer;
