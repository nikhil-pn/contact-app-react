import React from "react";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { css } from "@emotion/react";

export default function Contactlist({searchText}) {
  const contacts = useLoaderData() ?? [];
  const results = contacts.results;

  const filteredContacts = results.filter((contact) => {
    const {first, last} = contact.name;
    return first.toLowerCase().includes(searchText) || last.toLowerCase().includes(searchText)
  })

  console.log(contacts);
  return (
    <ul css={css`
    list-style: none;
    padding: 0px;
    `}>
      {filteredContacts?.length
        ? filteredContacts.map((contact) => {
          let {id:{value}, name:{first, last}} = contact
            return <li key={`${first} + ${last}`}>
              <NavLink css={css({
                display: "block",
                padding: "4px 8px",
                textDecoration: "none",
                color :"royalblue",
                "&.active" : {
                  background: "royalblue",
                  color : "white",
                  borderRadius: "8px"
                }
              })} to={`/contacts/${first}`}>{`${first} ${last}`}</NavLink>
            </li>;
          })
        : null}
    </ul>
  );
}
