import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.jsx'
import './styles.css'



export default function Bounty(props) {

    const {
      type,
      First_Name,
      Last_Name,
      isAlive,
      BountyAward ,
      imgUrl,
      _id,
      deleteBounty,
      editBounty
    } = props;

        const [editToggle, setEditToggle] = useState(false)

  return (
    <div className="bounty">
      {!editToggle ? (
        <>
          <h2>Type: {type} </h2>
          <h3 className="underline">Name</h3>
          <h2>First: {First_Name} </h2>
          <h2>Last: {Last_Name} </h2>
          <h3> {isAlive} </h3>
          <h3>BountyAward: {BountyAward + `${" Credits"}`} </h3>
          <p>
            {" "}
            <img
              src={imgUrl}
              alt={`Bounty: ${type}`}
              height={250}
              width={250}
            />{" "}
          </p>

          <button
            className="delete_btn"
            onClick={() => props.deleteBounty(_id)}
          >
            Delete
          </button>

          <button
            className="edit_btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <AddBountyForm
            setEditToggle = {setEditToggle}
            editToggle = {editToggle}
            type={type}
            First_Name={First_Name}
            Last_Name={Last_Name}
            isAlive={isAlive}
            BountyAward={BountyAward}
            imgUrl={imgUrl}
            _id={_id}
            btnText="Submit Edit" // just Text
            submit={editBounty}
            // submit={(updates) => editBounty(updates, _id)}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
