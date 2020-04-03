import React from "react";
import { useQuery } from "react-query";
import { Contact } from "../Contact";
import { Contact as ContactType } from "../../Types";

import "./ContactsList.css";

const API_URL =
  "https://cors-anywhere.herokuapp.com/https://active-campaign-code-challenge.herokuapp.com";

async function fetchContacts() {
  return fetch(`${API_URL}/contacts`)
    .then((data) => data.json())
    .catch((error) => error);
}

export const ContactsList = () => {
  // @ts-ignore
  const { status, data, error } = useQuery("todos", fetchContacts);

  return (
    <div className="ContactsList">
      {status === "loading" ? (
        <span>Loading...</span>
      ) : status === "error" ? (
        <span>Error: {error!.message}</span>
      ) : (
        // also status === 'success', but "else" logic works, too
        <div className="ContactsListTable">
          <div className="ContactsListTableHeader">
            <div className="ContactListTableHeader__Name">Name</div>
            <div className="ContactListTableHeader__Email">Email</div>
            <div className="ContactListTableHeader__Organization">
              Organization ID
            </div>
          </div>
          {data.contacts.map((contact: ContactType) => (
            <Contact {...contact} key={contact.id} />
          ))}
        </div>
      )}
    </div>
  );
};
