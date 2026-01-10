const { connectToDB } = require("../database/index");
const { ObjectId } = require("mongodb");

const contactCont = {};

contactCont.getAllContacts = async (req, res) => {
  try {
    const db = await connectToDB("contacts_db");
    const contacts = db.collection("contacts");
    const allUsersContacts = await contacts.find().toArray();
    console.log("All contacts retrieved");
    res.status(200).json(allUsersContacts);
  } catch (e) {
    console.log("Failed to fetch contacts", e);
    res.status(404).json({
      error: "Contacts not found",
    });
  }
};

contactCont.getContactById = async function (req, res) {
  try {
    const db = await connectToDB("contacts_db");
    const contacts = db.collection("contacts");
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(404).json({
        error: "Invalid contact ID format",
      });
    }
    const contact = await contacts.findOne({
      _id: new ObjectId(id),
    });
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    console.log("Contact retrieved successfully");
    res.status(200).json(contact);
  } catch (e) {
    res.status(500).json({
      error: "Server error while retrieving contact",
    });
  }
};

module.exports = contactCont;
