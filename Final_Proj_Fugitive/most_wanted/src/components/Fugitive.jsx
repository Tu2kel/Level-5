import React, { useState } from "react";
import AddFugitiveForm from "./AddFugitiveForm";
import "../styles.css";

export default function Fugitive(props) {
  const {
    type, //Type of Crime ie Cyber, White Collar
    first_name,
    last_name,
    reward,
    imgUrl,
    _id,
    deleteFugitive,
    editFugitive,
  } = props;
  console.log("Fugitve.jsx line 17 Props:", props);

  const [editToggle, setEditToggle] = useState(false);

  return (
    <div className="wanted_container">
      {!editToggle ? (
        <>
          <h2>Type: {type} </h2>
          <h2>First: {first_name} </h2>
          <h2>Last: {last_name} </h2>
          {/* <h3>Status: {status ? "Alive" : "Dead"} </h3> */}
          <h3>Reward: {`$ ${reward}` } </h3>
          <p>
            
            <img
              src={imgUrl}
              alt={`Wanted: ${imgUrl}`}
              height={250}
              width={250}
            />
          </p>

          <button
            className="delete_btn"
            onClick={() => props.deleteFugitive(_id)}
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
          <AddFugitiveForm
            setEditToggle={setEditToggle}
            editToggle={editToggle}
            type={type}
            first_name={first_name}
            last_name={last_name}
            reward={reward}
            imgUrl={imgUrl}
            _id={_id}
            btnText="Submit Edit" // just Text
            submit={editFugitive}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
