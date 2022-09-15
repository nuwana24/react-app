import React, { useEffect, useState } from "react";
import "../../css/contact-page.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import api from "../../api/index";
import ContactList from "./ContactList";
import { toast } from "../toast-notification/toast/ToastManager";
import "../toast-notification/toast/Toast.scss";

type Props = {};

interface IList {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  mobileNumber: number;
  altEmail: string;
  email: string;
  password: string;
  marketingPref: string;
}

const ContactPage = (props: Props) => {
  const navigate = useNavigate();
  const [contactList, setContactList] = useState<IList[]>([]);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedItem, setUpdatedItem] = useState(false);
  const [deletedItem, setDeletedItem] = useState(false);
  const [contacts, setContacts] = useState<IList[]>([]);

  const getContacts = async () => {
    const response = await api.get("/contact");
    console.log(response.data);
    return response.data;
  };
  useEffect(() => {
    console.log("test use effect ");
    getContacts()
      .then((res: any) => {
        setContactList(res);
        setContacts(res);
      })
      .catch((error: any) => {});
  }, [updatedItem, deletedItem]);

  const navigateToForm = () => {
    // 👇️ navigate to /contacts
    navigate("/contactForm");
  };

  // toast.show({
  //   id: "added",
  //   // title: "Onload toast title",
  //   title: "Contact",
  //   content: "Contact name added successfully",
  //   duration: 20000,
  // });

  const contactHandler = async (contact: any) => {
    setContactList(contactList.concat(contact));
    console.log(contact);
    const request = contact;

    const response = await api
      .post("/contact", request)
      .then((res: any) => {
        setContactList([...contactList, res.data]);
        setContacts([...contactList, res.data]);
      })
      .catch((error: any) => {
        console.log(error);
      });
    return response;
  };
  const contactupdateHandler = async (contact: any) => {
    let updateItem = contact;

    await api
      .put(`/contact/${contact.id}`, updateItem)
      .then((res: any) => {
        setUpdatedItem(contact.id);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const closeHandler = () => {
    setShow(false);
  };
  const deleteHandler = async (selected: any) => {
    await api
      .delete(`/contact/${selected.id}`)
      .then((res: any) => {
        setDeletedItem(selected.id);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const handleClose = () => {
    setSelected(null);
    setShow(false);
  };

  const handleEdit = (selected: any) => {
    setSelected(selected);
    setShow(true);
  };
  const handleSubmitModal = () => setShow(!show);
  return (
    <>
      <body>
        <div className="page-description-add-button2">
          <button onClick={navigateToForm}>Add Contact</button>
        </div>
        <div className="page-title">
          <div className="title">
            <h1>Contact</h1>
          </div>
          <div className="page-description">
            <div className="page-description-left">
              <h5>Manage team member roles for BT account and services - swiftly and easily</h5>
            </div>
            <div className="page-description-add-button">
              <button onClick={navigateToForm}>Add Contact</button>
              <button
                onClick={() =>
                  toast.show({
                    id: "added",
                    title: "Contact",
                    content: "<Contact name> added successfully",
                    duration: 3000,
                  })
                }
              >
                Show toast
              </button>

            </div>
          </div>
        </div>
        {contactList.length > 0 ? (
          <ContactList
            contactList={contacts}
            deleteHandler={deleteHandler}
            handleEdit={handleEdit}
            contactHandler={contactHandler}
            closeHandler={closeHandler}
            contactupdateHandler={contactupdateHandler}
          />
        ) : (
          ""
        )}
      </body>
    </>
  );
};
export default ContactPage;
