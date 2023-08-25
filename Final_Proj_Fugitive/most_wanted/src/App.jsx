import React, { useState, useEffect } from "react";
import axios from "axios";
import Fugitive from "./components/Fugitive";
import AddFugitiveForm from "./components/AddFugitiveForm";
import Navbar from "./components/Navbar";
import ReportForm from "./components/ReportForm";
// import { FugitiveProvider} from "./components/FugitiveContext";
import { useFugitiveContext } from "./components/FugitiveContext";

// import AudioPlayer from "../components/AudioPlayer";

export default function App() {
  const [fugitives, setFugitives] = useFugitiveContext();

   useEffect(() => {
     getFugitive();
   }, []);

  const [reportData, setReportData] = useState({
    sightingLocation: "",
    additionalInfo: "",
  });

 
  function getFugitive() {
    axios
      .get("/fugitives")
      .then((res) => {
        console.log("App line 20 Fugitives data:", res.data);
        setFugitives(res.data);
      })
      .catch((err) => console.log(err.res.data.errMsg));
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
    console.log(
      "Edit Fugitive clicked",
      " updates",
      updates,
      "fugitiveId",
      fugitiveId
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

  const [editToggle, setEditToggle] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitting report data:', reportData);

    // Assuming you want to use axios to send the reportData to the server
    axios.post('/reports', reportData)
      .then((response) => {
        console.log('Report submitted successfully:', response.data);
        // Reset the reportData state after successful submission
        setReportData({
          sightingLocation: '',
          additionalInfo: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting report:', error);
      });
  }




  function handleFilter(e) {
    // console.log(e.target.value);
    if (e.target.value === "reset") {
      getFugitive();
    } else {
      axios
        .get(`/fugitives/search/type?type=${e.target.value}`)
        .then((res) => setFugitives(res.data))
        .catch((err) => console.log("Error: ", err));
    }
  }

  return (
    <div>
      {/* <AudioPlayer /> */}
      <Navbar />
      <div className="container">
        <AddFugitiveForm
          setEditToggle={setEditToggle}
          editToggle={editToggle} 
          submit={addFugitive}
          btnText="Add Fugitive"
        />

        <ReportForm
          reportData={reportData}
          setReportData={setReportData}
          handleSubmit={handleSubmit}
        />

        {/*------------------------- NOTE FIX the FILTER QUERIES BY TYPE SECTION WHEN AVAILABLE */}

        <h4> Filter by Crime </h4>
        <select onChange={handleFilter} className="filter_form">
          <option value="reset"> Select by Crime </option>
          <option value="cyber">Cyber</option>
          <option value="white_collar">White Collar</option>
          <option value="violent">Violent</option>
        </select>
        <div className="fugitive_list">
          {fugitives.map((fugitive) => (
            <Fugitive
              key={fugitive._id}
              {...fugitive}
              deleteFugitive={deleteFugitive}
              editFugitive={editFugitive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
