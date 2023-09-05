import React, { useState } from "react";
import AddFugitiveForm from "./AddFugitiveForm";
import "../styles.css";

//𝘁𝗼 𝗱𝗶𝘀𝗽𝗹𝗮𝘆 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 𝗼𝗳 𝗮 𝘀𝗶𝗻𝗴𝗹𝗲 𝗳𝘂𝗴𝗶𝘁𝗶𝘃𝗲

export default function Fugitive(props) {
  const { // destructured properties from inputs
    type, //Type of Crime ie Cyber, White Collar
    first_name,
    last_name,
    reward,
    imgUrl,
    last_known_location,
    additional_info,
    _id,
    deleteFugitive,
    editFugitive,
  } = props;

  const [editToggle, setEditToggle] = useState(false); // initial value set to false
 

  return (
    <div className="fugitive_details">
      {!editToggle ? ( //conditional rendering 
        <> {/*if edit is fals display 1st set up to colon */}
          <h2>Type: {type} </h2>
          <h2>First: {first_name} </h2>
          <h2>Last: {last_name} </h2>
          <h2>Reward: ${reward} </h2>
          <img
            src={imgUrl}
            // alt={`Wanted: ${imgUrl}`}
            height={250}
            width={250}
          />
          <h2>Last Known: {last_known_location} </h2>
          <h2>Additional Info: {additional_info} </h2>

          <button className="delete_btn" onClick={() => deleteFugitive(_id)}>
            Delete
          </button>
          <br />

          <button
            className="edit_btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <> {/*if editToggle is true display the editted info area*/}
          <AddFugitiveForm
            setEditToggle={setEditToggle}
            editToggle={editToggle}
            type={type}
            first_name={first_name}
            last_name={last_name}
            reward={reward}
            imgUrl={imgUrl}
            additional_info={additional_info}
            last_known_location={last_known_location}
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
  ); // closes return
} // closes App
