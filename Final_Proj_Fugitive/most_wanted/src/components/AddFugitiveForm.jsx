import React, { useState, useEffect } from "react";

//𝗮𝗱𝗱𝘀 𝗮 𝗻𝗲𝘄 𝗳𝘂𝗴𝗶𝘁𝗶𝘃𝗲

export default function AddFugitiveForm(props) {
  // type: props.type || "" ---> leaves the field in tack with prev info
  // first_name: "" ---> causes the form to lose the previous info  
  const initInputs = {
    type: props.type || "",
    first_name: props.first_name || "",
    last_name: props.last_name || "",
    reward: props.reward || "",
    imgUrl: props.imgUrl || "",
    last_known_location: /*props.last_known_location || */"",
    additional_info: /*props.additional_info ||*/ "",
  };

  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e, "for Edit Submit Btn");
    props.submit(inputs, props._id);
    setInputs(initInputs);
    props.setEditToggle((prevToggle) => !prevToggle);
  }

  return (
    <form onSubmit={handleSubmit} className="add_Info_Field" >
      <input
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
        placeholder="Crime"
      />
      <input
        type="text"
        name="first_name"
        value={inputs.first_name}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="last_name"
        value={inputs.last_name}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="reward"
        value={inputs.reward}
        onChange={handleChange}
        placeholder="Reward"
      />

      <input
        type="text"
        name="imgUrl"
        value={inputs.imgUrl}
        onChange={handleChange}
        placeholder="https://ImageHere"
      />

      <input
        type="text"
        name="last_known_location"
        value={inputs.last_known_location}
        onChange={handleChange}
        placeholder="Report of Sighting"
      />

      <input
        type="text"
        name="additional_info"
        value={inputs.additional_info}
        onChange={handleChange}
        placeholder="Add a description"
      />
      {/* <input type="file" /> */}
      <button> {props.btnText} </button>
    </form>
  );
}
