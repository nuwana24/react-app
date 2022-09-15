import React, { useState } from "react";
import "../../css/contact-page.scss";
import editIcon from "../../images/edit.png";
import deleteIcon from "../../images/delete.png";
import Modal from "../modal/modal";
import api from "../../api/index";

type Props = {
  contactHandler: (contact: object) => void;
  contactList: any;
  contactupdateHandler: (contact: object) => void;
  handleEdit: (use: object) => void;
  deleteHandler: (use: object) => void;
  formUpdate?: boolean;
  updateData?: any;
  onUpdate: (e: React.FormEvent, data: any) => Promise<any>;
  closeHandler: () => void;
};

const ContactList = (props: Props) => {
  const contactList = props.contactList;
  console.log(contactList);
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState(null);

  // const closeHandler = () => {
  //   setShowPopup(false);
  // };
  const handleOpen = (data: any) => {
    setSelected(data);
    setShowPopup(true);
  };

  const handleClose = () => {
    // setSelected(null);
    setShowPopup(false);
  };

  const updateHandler = async (e: React.FormEvent, data: any) => {
    e.preventDefault();

    try {
      props.onUpdate(e, data);

      setShowPopup(false);
      setSelected(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Mobile Number</th>
              <th>Alternate Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactList.length > 0 &&
              contactList.map((item: any) => (
                <tr>
                  <td>
                    {item.title}.{item.firstName} {item.lastName}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.altEmail}</td>
                  <td>
                    <button
                      className="transparent-button"
                      onClick={() => handleOpen(item)}
                    >
                      <img src={editIcon} />
                    </button>
                    <button
                      className="transparent-button"
                      onClick={() => props.deleteHandler(item)}
                    >
                      <img src={deleteIcon} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {showPopup && (
          <Modal
            selected={selected}
            showPopup={showPopup}
            handleClose={handleClose}
            onUpdate={updateHandler}
          />
        )}
      </div>
      <div className="contact-table-responsive">
        {contactList.length > 0 &&
          contactList.map((item: any) => (
            <table>
              <thead>
                <tr>
                  <th>
                    {item.title}.{item.firstName} {item.lastName}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Email: </b>
                    {item.email}
                    <br />
                    <b>Mobile: </b>
                    {item.mobileNumber}
                    <br />
                    <b>Alternative Email: </b>
                    {item.altEmail}
                    <br />
                  </td>
                </tr>
                <tr>
                  <button className="transparent-button">
                    {/*onClick={() => setShowPopup(true)}*/}
                    <img src={editIcon} />
                  </button>
                  <button
                    className="transparent-button"
                    onClick={() => props.deleteHandler(item)}
                  >
                    <img src={deleteIcon} />
                  </button>
                </tr>
              </tbody>
            </table>
          ))}
      </div>
    </>
  );
};
export default ContactList;
