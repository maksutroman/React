
import React from "react";
import "./ContactList.css";

import ContactItem from  "./ContactItem/ContactItem";

const ContactList = () => {
  return (
    <ul class="list-group" id="contact-list">
      <ContactItem />
    </ul>
  );
};
export default ContactList;