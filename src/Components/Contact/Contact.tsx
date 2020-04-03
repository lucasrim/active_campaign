import React, { useState } from "react";
import { Contact as ContactType } from "../../Types";

import "./Contact.css";

export const Contact: React.FC<ContactType> = (props: ContactType) => {
  const [isChecked, setChecked] = useState(false);
  const handleChecked = () => setChecked(!isChecked);

  return (
    <div className="Contact">
      <div className="Contact__Checkbox">
        <input type="checkbox" onChange={handleChecked} checked={isChecked} />
      </div>
      <div className="Contact__Name">{`${props.firstName} ${props.lastName}`}</div>
      <div className="Contact__Email">{props.email}</div>
      <div className="Contact__Org">{props.organization}</div>
    </div>
  );
};
