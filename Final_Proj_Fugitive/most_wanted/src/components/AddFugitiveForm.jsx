import React, { useState, useEffect } from "react";

//𝗮𝗱𝗱𝘀 𝗮 𝗻𝗲𝘄 𝗳𝘂𝗴𝗶𝘁𝗶𝘃𝗲

export default function AddFugitiveForm(props) {
  // type: props.type || "" ---> leaves the field in tack with prev info
  // first_name: "" ---> causes the form to lose the previous info  
  const initInputs = { //i͟n͟i͟t͟i͟a͟l s͟t͟a͟t͟e w͟i͟t͟h d͟e͟f͟a͟u͟l͟t v͟a͟l͟u͟e͟s o͟r s͟t͟r͟i͟n͟g͟s
    type: props.type || "",
    first_name: props.first_name || "",
    last_name: props.last_name || "",
    reward: props.reward || "",
    imgUrl: props.imgUrl || "",
    last_known_location: "",
    additional_info:  "",
  };

  const [inputs, setInputs] = useState(initInputs); // s͟e͟t͟s i͟n͟p͟u͟t͟s s͟t͟a͟t͟e a͟s i͟n͟i͟t v͟a͟r͟i͟a͟b͟l͟e v͟a͟l͟u͟e͟s t͟o u͟p͟d͟a͟t͟e s͟t͟a͟t͟e 

  function handleChange(e) {
    // c͟a͟l͟l͟e͟d w͟h͟e͟n a͟n i͟n͟p͟u͟t f͟i͟e͟l͟d͟'͟s v͟a͟l͟u͟e c͟h͟a͟n͟g͟e͟s
    const { name, value } = e.target; //d͟e͟s͟t͟r͟u͟c͟t͟u͟r͟e͟d g͟r͟a͟b͟s f͟r͟o͟m e.t͟a͟r͟g͟e͟t o͟b͟j
    // Update the state of 'inputs' by merging the previous state (prevInputs) with a new object that sets the property 'name' to the new 'value'
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value })); //copies prevState n Updates the property with the new value
  }

  function handleSubmit(e) { //f͟o͟r͟m s͟u͟b͟m͟i͟s͟s͟i͟o͟n
    e.preventDefault();
    console.log(e, "for Edit Submit Btn");
    props.submit(inputs, props._id); //submits inputs values of 
    setInputs(initInputs);// sets the state to initInput value resets form inputs 
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
