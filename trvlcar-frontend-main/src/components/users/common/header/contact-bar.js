import React from "react";
import { RiHeadphoneLine, RiMailOpenLine, RiMapPinLine } from "react-icons/ri";

const ContactBar = () => {
  return (
    <ul className="contact-bar">
      <li>
        <RiHeadphoneLine />
        <div>
        <p>(904)-369-8938 <br />(904)-651-6572</p>
        </div>
      </li>
      <li className="d-none d-lg-flex">
        <RiMailOpenLine />
        <div>
          <a href="mailto:info@trvlcar.com">info@trvlcar.com</a>
          <br /><a href="mailto:support@trvlcar.com">support@trvlcar.com</a>
        </div>
      </li>
      <li>
        <RiMapPinLine />
        <div>
        Cherry Tree Ct, Jacksonville, <br />32216 Florida USA
        </div>
      </li>
    </ul>
  );
};

export default ContactBar;
