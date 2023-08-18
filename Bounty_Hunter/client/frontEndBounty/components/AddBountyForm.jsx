import React, { useState, useEffect } from "react";
    


export default function AddBountyForm(props) {

    const initInputs = {
      type: props.type || "",
      first_name: props.first_name || "",
      last_name: props.last_name || "",
      isAlive: props.isAlive !== undefined ? props.isAlive : false,
      bountyAward: props.bountyAward || "",
      imgUrl: props.imgUrl || ""
    };

    const [inputs, setInputs] = useState(initInputs)
  
    
  function handleChange(e) {
    const { name, value, checked } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: name === "isAlive" ? checked : value,
    }));
  }
   

       
    function handleSubmit(e){
      e.preventDefault()
      console.log(e, 'for Edit Submit Btn');
      props.submit(inputs, props._id)
      setInputs(initInputs)
      props.setEditToggle((prevToggle) => !prevToggle);
    }


    



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
        placeholder="Sith / Jedi"
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
        name="bountyAward"
        value={inputs.bountyAward}
        onChange={handleChange}
        placeholder="BountyAward"
      />
      <input
        className="isAlive"
        type="checkbox"
        name="isAlive"
        checked={inputs.isAlive}
        onChange={handleChange}
      />
      Alive
      <input
        type="text"
        name="imgUrl"
        value={inputs.imgUrl}
        onChange={handleChange}
        placeholder="imgUrl"
      />
      <input type="file" />
      <button> {props.btnText} </button>
    </form>
  );
  
}
