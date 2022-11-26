import { Await } from "react-router-dom";


// console.log('sldkjfl');
export async function loadContacts() {
  const result = await fetch("https://randomuser.me/api/1.0/?seed=7f19b6248c3da22b&results=50");
  // console.log(result);
  return await result.json()
}
export async function loadContactID(contactId) {
  console.log(contactId);
  const contacts = await loadContacts();
  console.log(contacts.results);
  return contacts.results.find(contact =>contact.name.first === contactId);
  // console.log("return", returnedName);
  // return contacts.results.find(contact => { 
  //   contact.name.first === contactId});
}
