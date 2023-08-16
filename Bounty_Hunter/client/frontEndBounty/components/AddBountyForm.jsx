import React, { useState, useEffect } from "react";

export default function AddBountyForm(props) {

    const initInputs = {
      type: props.type || "",
      First_Name: props.First_Name || "",
      Last_Name: props.Last_Name || "",
      isAlive: props.isAlive !== undefined ? props.isAlive : false,
      BountyAward: props.BountyAward || "",
      imgUrl: props.imgUrl || ""
    };

    // const [inputs, setInputs] = useState(initInputs)
    const [inputs, setInputs] = useState({
    type: '',
    First_Name: '',
    Last_Name: '',
    isAlive: false,
    BountyAward: '',
    imgUrl: '',
  });
    
  function handleChange(e) {
    const { name, value, checked } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: name === "isAlive" ? checked : value,
    }));
  }
   

    // function handleChange(e) {
    //   const { name, value, checked } = e.target;

    //   if (name === "isAlive") {
    //     setInputs((prevInputs) => ({
    //       ...prevInputs,
    //       [name]: checked,
    //     }));
    //   } else {
    //     setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    //   }
    // }
    
    function handleSubmit(e){
      e.preventDefault()
      console.log(e, 'for Edit Submit Btn');
      props.submit(inputs, props._id)
      setInputs(initInputs)
      props.setEditToggle((prevToggle) => !prevToggle);
    }

    // function handleSubmit(e) {
    //   e.preventDefault();
    //   props.submit(inputs);
    //   setInputs({
    //     type: "",
    //     First_Name: "",
    //     Last_Name: "",
    //     isAlive: false,
    //     BountyAward: "",
    //     imgUrl: "",
    //   });
    // }



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
        name="First_Name"
        value={inputs.First_Name}
        onChange={handleChange}
        placeholder="First_Name"
      />

      <input
        type="text"
        name="Last_Name"
        value={inputs.Last_Name}
        onChange={handleChange}
        placeholder="Last_Name"
      />

      <input className='isAlive'
        type="checkbox"
        name="isAlive"
        checked={inputs.isAlive}
        onChange={handleChange} //***/ FIND ANOTHER ONCHANGE ***
        placeholder="isAlive = Y / N"
      />

      <input
        type="text"
        name="BountyAward"
        value={inputs.BountyAward}
        onChange={handleChange}
        placeholder="BountyAward"
      />

      <input
        type="text"
        name="imgUrl"
        value={inputs.imgUrl}
        onChange={handleChange}
        placeholder="imgUrl"
      />

      <button> {props.btnText} </button>
    </form>
  );
  
}
