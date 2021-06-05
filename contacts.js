const fs = require("fs");
const path = require("path");

const contactsPath = path.get("./db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
  if (err) throw err;
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
      if (err) throw err;
      
      fs.writeFile(
  contactsPath, JSON.stringify(newContact),
  (err) => {
    if (err) throw err;

    console.log('Done');
  }
);
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
  if (err) throw err;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};