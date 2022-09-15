import React, { useState } from "react";
import "./modal.scss";

type Props = {
  showPopup: boolean;
  // updateData: any;
  selected?: any;
  // formUpdate: boolean;
  handleClose: () => void;
  onUpdate: (e: React.FormEvent, data: any) => void;
  // closeHandler: () => void;
  // setOpenModal: () => void;
  // contactHandler: (contact: any) => Promise<void>;
  // contactupdateHandler: (contact: any) => Promise<void>;
};

const Modal = (props: Props) => {
  const { selected } = props;

  const [data, setData] = useState(selected || null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  return (
    <form onSubmit={(e) => props.onUpdate(e, data)}>
      <div className="modalBackground">
        <div className="modalContainer">
          {/* <button  onClick={() => handleClose(false)}>X</button> */}
          <div className="title">
            <h2>Update Contact</h2>
          </div>
          <div className="title">
            <h2>Please update your details</h2>
          </div>
          <div className="body">
            <div className="form-row">
              <label>Title:</label>
              <br />
              <select
                id="title"
                name="title"
                value={data.title || ""}
                onChange={(e) => setData({ ...data, title: e.target.value })}
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
                value={data.firstName || ""}
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
                value={data.lastName || ""}
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
                value={data.mobileNumber || ""}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-row">
              <label>Alternative Email(Optional):</label>
              <br />
              <input
                type="text"
                id="altEmail"
                name="altEmail"
                value={data.altEmail || ""}
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
                value="yes"
                checked={!!(data && data.marketingPref === "yes")}
                onChange={onChangeHandler}
              />
              <label>Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="marketingPref"
                name="marketingPref"
                value="no"
                checked={!!(data && data.marketingPref === "no")}
                onChange={onChangeHandler}
              />
              <label>No</label>
            </div>
            <div className="modalButton">
              <button>Back</button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
