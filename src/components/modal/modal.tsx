import React from "react";
import "./modal.scss";

type Props = {
  showPopup: boolean;
  // updateData: any;
  // selected?: any;
  // formUpdate: boolean;
  handleClose: () => void;
  // closeHandler: () => void;
  // setOpenModal: () => void;
  // contactHandler: (contact: any) => Promise<void>;
  // contactupdateHandler: (contact: any) => Promise<void>;
};

const modal = (props: Props) => {
  return (
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
            <select id="title" name="title">
              <option value="Mr">Mr</option>
              <option value="Miss">Miss</option>
              <option value="Mrs">Mrs</option>
              <option value="Rev">Rev</option>
            </select>
          </div>
          <div className="form-row">
            <label>First Name:</label>
            <br />
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-row">
            <label>Last Name:</label>
            <br />
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="form-row">
            <label>Mobile Number:</label>
            <br />
            <input type="text" id="mobileNumber" name="mobileNumber" />
          </div>
          <div className="form-row">
            <label>Alternative Email(Optional):</label>
            <br />
            <input type="text" id="altEmail" name="altEmail" />
          </div>

          <h2 className="form-heading">Matching Preferences</h2>
          <p>Please select your preferred contact method:</p>
          <div>
            <input type="radio" id="marketingPref" name="marketingPref" />
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
          <div className="modalButton">
            <button>Back</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
