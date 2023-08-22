import React, { useState, useEffect } from "react";

export default function AddFugitiveForm(props) {
  const initInputs = {
    type: props.type || "",
    first_name: props.first_name || "",
    last_name: props.last_name || "",
    status: props.status !== undefined ? props.status: false,
    reward: props.reward || "",
    imgUrl: props.imgUrl || "",
  };

  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value, checked } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: name === "status" ? checked : value,
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
    <form onSubmit={handleSubmit}>
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
        className="status"
        type="checkbox"
        name="status"
        checked={inputs.status}
        onChange={handleChange}
        label={"Status"}
      />
      Alive
      <input
        type="text"
        name="imgUrl"
        value={inputs.imgUrl}
        onChange={handleChange}
        placeholder="Https://ImageHere"
      />
      <input type="file" />
      <button> {props.btnText} </button>
    </form>
  );
}
