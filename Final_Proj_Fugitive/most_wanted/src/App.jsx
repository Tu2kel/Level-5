import React, { useState, useEffect } from "react";
import axios from "axios";
import AddFugitiveForm from "./components/AddFugitiveForm";
import Fugitive from "./components/Fugitive";
import Navbar from "./components/Navbar";
import { useFugitiveContext } from "./components/FugitiveContext";

// import AudioPlayer from "../components/AudioPlayer";

export default function App() {
  //d͟e͟s͟t͟r͟u͟c͟t͟u͟r͟e͟d e͟x͟t͟r͟a͟c͟t͟s t͟h͟e v͟a͟l͟u͟e͟s 
  const { fugitives, setFugitives } = useFugitiveContext();

// s͟e͟n͟d͟s g͟e͟t r͟e͟q
  function getFugitive() {
    axios
      .get("/fugitives") //e͟n͟d͟p͟o͟i͟n͟t o͟f A͟P͟I
      .then((res) => { //i͟f s͟u͟c͟c͟e͟s͟s͟f͟u͟l l͟o͟g r͟e͟s͟p͟o͟n͟s͟e o͟f d͟a͟t͟a
        console.log("App line 19 Fugitives data:", res.data);
        setFugitives(res.data); //c͟a͟l͟l͟s s͟e͟t͟F͟u͟g͟i͟t͟i͟v͟e͟s f͟u͟n͟c͟t͟i͟o͟n p͟a͟s͟s͟i͟n͟g r͟e͟s͟p͟o͟n͟s͟e o͟f d͟a͟t͟a
      })
      .catch((err) => console.log(err.res.data.errMsg)); // catches err
  }

  function addFugitive(newFugitive) { // f͟u͟n͟c͟t t͟a͟k͟e n͟e͟w͟F͟u͟g o͟b͟j͟ a͟s a͟r͟g͟
    axios
      .post("/fugitives", newFugitive) // s͟e͟n͟d͟s p͟o͟s͟t r͟e͟q f͟u͟g e͟n͟p͟o͟i͟n͟t p͟a͟s͟s͟e͟s n͟e͟w͟F͟u͟g o͟b͟j
      .then((res) => {
        setFugitives((prevFugitives) => [...prevFugitives, res.data]);
      })
      .catch((err) => console.log("Error: ", err));
  }

  function deleteFugitive(fugitiveId) {
    axios
      .delete(`/fugitives/${fugitiveId}`)
      .then((res) => {
        setFugitives((prevFugitives) =>//c͟a͟l͟l͟s s͟e͟t͟F͟u͟g f͟u͟n͟c p͟a͟s͟s͟i͟n͟g p͟r͟e͟v͟F͟u͟g v͟a͟l͟u͟e͟s o͟f f͟u͟g͟s  
          prevFugitives.filter((fugitive) => fugitive._id !== fugitiveId) //r͟e͟t͟u͟r͟n͟s n͟e͟w a͟r͟r (͟v͟i͟a f͟i͟l͟t͟e͟r͟)͟p͟r͟e͟v a͟n͟d n͟e͟w f͟u͟g͟s
        );//.f͟i͟l͟t͟e͟r m͟e͟t͟h͟o͟d  c͟a͟l͟l͟b͟a͟c͟k f͟u͟g r͟e͟t͟u͟r͟n͟s f͟u͟g i͟d n͟o͟t e͟q͟u͟a͟l t͟o 
      })
      .catch((err) => console.log(err));
  }

  function editFugitive(updates, fugitiveId) {//  e͟d͟F͟u͟g  2͟a͟r͟g͟s o͟b͟j͟s u͟p͟d͟a͟t͟e͟s a͟p͟p͟l͟y͟i͟n͟g t͟o f͟u͟g a͟n͟d i͟d o͟f f͟u͟g t͟o u͟p͟d͟a͟t͟e
    console.log(
      "Edit Fugitive clicked",
      " updates",
      updates,
      "fugitiveId",
      fugitiveId
    );
    axios
      .put(`/fugitives/${fugitiveId}`, updates) //s͟e͟n͟d͟s u͟p͟d͟a͟t͟e t͟o f͟u͟g e͟n͟d͟p͟o͟i͟n͟t w͟i͟t͟h u͟p͟d͟a͟t͟e͟d i͟n͟f͟o f͟o͟r t͟h͟e s͟p͟e͟i͟c͟i͟f͟i͟e͟d i͟d o͟f t͟h͟a f͟u͟g
      .then((res) => //r͟e͟s c͟a͟l͟l͟b͟a͟c͟k i͟f s͟u͟c͟c͟e͟s͟s͟f͟u͟l 
        setFugitives((prevFugitives) => // c͟a͟l͟l͟s s͟e͟t͟F͟u͟g f͟u͟n͟c w͟i͟t͟h p͟r͟e͟v͟F͟u͟g a͟r͟g
          prevFugitives.map((fugitive) => // m͟a͟p͟s o͟v͟e͟r p͟r͟e͟v͟F͟u͟g ͟/ r͟e͟t͟u͟r͟n͟s n͟e͟w a͟r͟r 
            fugitive._id !== fugitiveId ? fugitive : res.data //i͟f c͟u͟r͟r͟e͟n͟t i͟d m͟a͟t͟c͟h͟e͟s f͟u͟g͟I͟d a͟r͟g ͟/ i͟f n͟o͟t r͟e͟t͟u͟r͟n f͟u͟g u͟n͟c͟h͟a͟n͟g͟e͟d ͟/ e͟l͟s͟e r͟e͟t͟u͟r͟n͟s u͟p͟d͟a͟t͟e͟d i͟n͟f͟o
          )
        )
      )
      .catch((err) => console.log(err)); //e͟r͟r c͟a͟l͟l͟b͟a͟c͟k r͟u͟n͟s i͟f e͟r͟r i͟n p͟u͟t r͟e͟q
  }

  const [editToggle, setEditToggle] = useState(false); // s͟e͟t͟s e͟d͟i͟t͟T͟o͟g͟g͟l͟e s͟t͟a͟t͟e t͟o f͟a͟l͟s͟e

 

  function handleFilter(e) {
    const selectedCrimeType = e.target.value;// e͟x͟t͟r͟a͟c͟t͟s v͟a͟l͟u͟e f͟r͟o͟m t͟a͟r͟g͟e͟t o͟f e͟v͟e͟n͟t a͟s͟s͟i͟g͟n͟s t͟o s͟e͟l͟e͟c͟t͟e͟d͟C͟r͟i͟m͟e͟T͟y͟p͟e
    // console.log(e.target.value);
    if (selectedCrimeType === "reset") { //i͟f s͟t͟a͟t͟e͟m͟e͟n͟t
      getFugitive(); // r͟u͟n g͟e͟t͟F͟u͟g i͟n͟f͟o
    } else {
      axios
        .get(`/fugitives/search/type?type=${selectedCrimeType}`)// s͟e͟t g͟e͟t r͟e͟q t͟o f͟u͟g e͟n͟d͟p͟o͟i͟n͟t s͟h͟o͟u͟l͟d r͟e͟p͟l͟a͟c͟e w͟i͟t͟h s͟e͟l͟e͟c͟t͟e͟d v͟a͟l͟u͟e
        .then((res) => setFugitives(res.data))
        .catch((err) => console.log("Error: ", err));
    }
  }

  useEffect(() => { //executes after frist render of component
    console.log('useEffect is running in App.jsx');
    getFugitive();
  }, []);

  return (
    <div>
      {/* <AudioPlayer /> */}
      <Navbar />
      <div className="container">
        <AddFugitiveForm //adds form  
          setEditToggle={setEditToggle} // passes setEdit as a prop 
          editToggle={editToggle} // passes edit as a prop
          submit={addFugitive} // " " 
          btnText="Add Fugitive"
        />

        {/*------------------------- NOTE FIX the FILTER QUERIES BY TYPE SECTION WHEN AVAILABLE */}

        <h4> Filter by Crime </h4>
        <select onChange={handleFilter} className="filter_form">
          <option value="reset"> Select by Crime </option>
          <option value="cyber">Cyber</option>
          <option value="white_collar">White Collar</option>
          <option value="violent">Violent</option>
        </select>
        <div className="fugitives_list">
          {fugitives.map((fugitives) => ( // maps over fugs
            <Fugitive {...fugitives} key={fugitives._id} //new instance of fug comp
              deleteFugitive={deleteFugitive}
              editFugitive={editFugitive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
