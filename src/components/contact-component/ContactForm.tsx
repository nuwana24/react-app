import React, { useEffect, useState } from "react";
import "../../css/contact-form.scss";
import { v4 as uuidv4 } from "uuid";
import api from "../../api/index";
import { useNavigate } from "react-router-dom";
import axios from "../../api/index";
import { toast } from "../toast-notification/toast/ToastManager";
import "../toast-notification/toast/Toast.scss"


type Props = {
  // contactHandler: (contact: object) => void;
  // contactList: any;
  // contactupdateHandler: (contact: object) => void;
  formUpdate?: boolean;
  updateData?: any;
  // closeHandler: () => void;
};
interface State {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  altEmail: string;
  mobileNumber: number;
  email: string;
  password: string;
  marketingPref: string;
}

type Form = {
  title: string;
  firstName: string;
  lastName: string;
  altEmail: string;
  mobileNumber: string;
  email: string;
  password: string;
  password2: string;
  marketingPref: string;
};

const int = {
  title: "",
  firstName: "",
  lastName: "",
  altEmail: "",
  mobileNumber: "",
  email: "",
  password: "",
  password2: "",
  marketingPref: "Yes",
};

const ContactForm = (props: Props) => {
  const navigate = useNavigate();
  const [contactList, setContactList] = useState<any>([]);
  const [contacts, setContacts] = useState<State[]>([]);

  const [formData, setFormData] = useState<Form>(int);

  const onChangeHandler = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const postData = async (contact: any) => {
  //   setContactList(contactList.concat(contact));
  //   console.log(contact);
  //   const request = contact;

  //   const response = await api
  //     .post("/contact", request)
  //     .then((res: any) => {
  //       setContactList([...contactList, res.data]);
  //       setContacts([...contactList, res.data]);
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  //   return response;
  // };
  toast.show({
    id: "my-id",
    title: "Onload toast title",
    content: "Onload toast body",
    duration: 5000,
  });

  const postData = (e: React.SyntheticEvent) =>{
    e.preventDefault();
    axios.post("/contact", { id: uuidv4(), ...formData })
    .then((res: any) => {
      setContactList([...contactList, res.data]);
      setContacts([...contactList, res.data]);
      navigate('/', {replace: true});
    }).catch((error: any) => {
      console.log(error);
    });
  }

  return (
    <>
      <body>
        <div className="page-title">
          <div className="title">
            <h1>Add New Contact</h1>
          </div>
          <div className="page-description">
            <div className="page-description-left">
              <h5>
                Manage team member roles for BT accounts and services swiftly
                and easily
              </h5>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <h1 className="form-heading">Please enter your details</h1>
            <div className="form-row">
              <label>Title:</label>
              <br />
              {/* <input type="text" id="fname" name="fname" /> */}
              <select
                id="title"
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
              >
                <option value="Mr">Mr</option>
                <option value="Miss">Miss</option>
                <option value="Mrs">Mrs</option>
                <option value="Rev">Rev</option>
              </select>
            </div>
            <div className="form-row">
              <label>First Name:</label>
              <br />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-row">
              <label>Last Name:</label>
              <br />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-row">
              <label>Mobile Number:</label>
              <br />
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-row">
              <label>Alternative Email (Optional):</label>
              <br />
              <input
                type="text"
                id="altEmail"
                name="altEmail"
                value={formData.altEmail}
                onChange={onChangeHandler}
              />
            </div>

            <h2 className="form-heading">Please set you login details</h2>

            <div className="form-row">
              <label>Username / Email:</label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-row">
              <label>Password:</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-row">
              <label>Confirm Password:</label>
              <br />
              <input
                type="password"
                id="password2"
                name="password2"
                value={formData.password2}
                onChange={onChangeHandler}
              />
            </div>

            <h2 className="form-heading">Matching Preferences</h2>
            <p>Please select your preferred contact method:</p>
            <div>
              <input
                type="radio"
                id="marketingPref"
                name="marketingPref"
                value={formData.marketingPref}
                onChange={onChangeHandler}
              />
              <label>Yes</label>

              {/* <input
                type="radio"
                id="marketingPref"
                name="marketingPref"
                value="No"
                onChange={(e) => setMarketingPref(e.target.value )}
              /> */}
              <label>No</label>
            </div>
            <div>
            <button 
                onClick={() =>
                  toast.show({
                    title: "Toast title",
                    content: "Toast body",
                    duration: 3000,
                  })
                }
              >
                Show toast
              </button>
              <button>Cancel</button>
              <button onClick={postData} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </body>
    </>
  );
};
export default ContactForm;
