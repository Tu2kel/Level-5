import React, { useState, useEffect } from "react";
import axios from "axios";
import Fugitive from "./components/Fugitive";
import AddFugitiveForm from "./components/AddFugitiveForm";
import Navbar from "./components/Navbar";
// import ReportForm from "./components/ReportForm";
// import AudioPlayer from "../components/AudioPlayer";

export default function App() {
  const [fugitives, setFugitives] = useState([]);

   useEffect(() => {
     getFugitive();
   }, []);


  function getFugitive() {
    axios
      .get("/fugitives")
      .then((res) => setFugitives(res.data))
      .catch((err) => console.log(err.res.data.errMsg));
    // .catch(err => console.log(err))
  }

  function addFugitive(newFugitive) {
    axios
      .post("/fugitives", newFugitive)
      .then((res) => {
        setFugitives((prevFugitives) => [...prevFugitives, res.data]);
      })

      .catch((err) => console.log("Error: ", err));
  }

  function deleteFugitive(fugitiveId) {
    axios
      .delete(`/fugitives/${fugitiveId}`)
      .then((res) => {
        setFugitives((prevFugitives) =>
          prevFugitives.filter((fugitive) => fugitive._id !== fugitiveId)
        );
      })
      .catch((err) => console.log(err));
  }

  function editFugitive(updates, fugitiveId) {
    console.log("Edit Fugitive clicked", " updates", updates, "fugitiveId", fugitiveId
    );
    axios
      .put(`/fugitives/${fugitiveId}`, updates)
      .then((res) =>
        setFugitives((prevFugitives) =>
          prevFugitives.map((fugitive) =>
            fugitive._id !== fugitiveId ? fugitive : res.data
          )
        )
      )
      .catch((err) => console.log(err));
  }
  /*-------------------------/*NOTE* FIX FILTER QUERIES BY TYPE SECTION WHEN AVAILABLE */

  function handleFilter(e) {
    // console.log(e.target.value);
    if (e.target.value === "reset") {
      getFugitive();
    } else {
      axios
        .get(`/fugitives/search/status?status=${e.target.value}`)
        .then((res) => setFugitives(res.data))
        .catch((err) => console.log("Error: ", err));
    }
  }

 

  return (
    <div>
      {/* <AudioPlayer /> */}
      <Navbar />
      <div className="container">
        <AddFugitiveForm submit={addFugitive} btnText="Add Fugitive" />

        {/*------------------------- NOTE FIX the FILTER QUERIES BY TYPE SECTION WHEN AVAILABLE */}
        <h4>Filter by Status </h4>
        <select onChange={handleFilter} className="filter_form">
          <option value="reset"> Select by Crime </option>
          <option value="cyber">Cyber</option>
          <option value="white_collar">White Collar</option>
          <option value="violent">Violent</option>
        </select>

        {fugitives.map((fugitive) => (
          <Fugitive
            {...fugitive}
            key={fugitive._id}
            deleteFugitive={deleteFugitive}
            editFugitive={editFugitive}
          />
        ))}
      </div>
    </div>
  );
}
