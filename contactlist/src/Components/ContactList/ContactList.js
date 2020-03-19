import React from "react";
import "./ContactList.css";

import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ List, onStarChange }) => {
  // console.log("Props in ContactList ", List);
  const singleContact = List.map(item => {
    return (
      <ContactItem
        key={item.id}
        name={item.name}
        address={item.address}
        phone={item.phone}
        email={item.email}
        gender={item.gender}
        avatar={item.avatar}
        star={item.star}
        onStarChange={() => onStarChange(item.id)}
      />
    );
  });

  return (
    <ul className="list-group" id="contact-list">
      {singleContact}
    </ul>
  );
};
export default ContactList;