import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.jsx'
import './styles.css'




export default function Bounty(props) {

    const {
      type,
      first_name,
      last_name,
      isAlive,
      bountyAward ,
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
          <h2>First: {first_name} </h2>
          <h2>Last: {last_name} </h2>
          <h3>Staus: {isAlive ? "Alive" : "Dead"} </h3>
          <h3>BountyAward: {bountyAward + `${" Credits"}`} </h3>
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
            setEditToggle={setEditToggle}
            editToggle={editToggle}
            type={type}
            first_name={first_name}
            last_name={last_name}
            isAlive={isAlive}
            bountyAward={bountyAward}
            imgUrl={imgUrl}
            _id={_id}
            btnText="Submit Edit" // just Text
            submit={editBounty}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
