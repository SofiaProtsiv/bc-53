import * as contactsApi from './contacts-api';

const contact = {
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg",
    createdAt: new Date(),
    email: "sofiaBC53@goit.ua",
    name: "SofiaBC53",
    phone: "+380675844154"
}

const contactToUpdate = {
    id: "33",
    email: "bc53@goit.ua",
    name: "BC53",
}

// contactsApi.getContacts().then(res => console.log(res))

// contactsApi.getContactById("5").then(res => console.log(res))

// contactsApi.createContact(contact).then(res => console.log(res))
// contactsApi.getContacts().then(res => console.log(res))

// contactsApi.updateContact(contactToUpdate).then(res => console.log(res))
// contactsApi.getContacts().then(res => console.log(res))

// contactsApi.deleteContact("45").then(res => console.log(res)).catch(error => console.log(error.message))
// contactsApi.getContacts().then(res => console.log(res))