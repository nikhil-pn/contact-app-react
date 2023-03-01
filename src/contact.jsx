import React from "react";
import { useLoaderData } from "react-router-dom";
import { css } from "@emotion/react";

export default function Contact() {
  // access loader data uisng useLoaderData hook
  const contact = useLoaderData();
  console.log(contact, "contafct logaed");

  return (
    <div
      css={css`
        margin: 16px;
      padding: 16px;
      display: grid;
    
      `}
    >
      <h1>
        {contact.name.first} {contact.name.last}
      </h1>
      <img
        css={css`
        width: 300px;
          object-fit: contains;
        `}
        src={contact.picture.large}
      />
      <h2>{contact.email}</h2>
      <h1>Phone Number: {contact.phone}</h1>
    </div>
  );
}
