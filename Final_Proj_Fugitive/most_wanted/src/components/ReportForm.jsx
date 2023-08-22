import React, { useState } from 'react'
import axios from 'axios'

export default function ReportForm() {

  const [reportData, setReportData] = useState({
    sightingLocation: "",
    additionalInfo: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setReportData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(e, 'Submit Form info');

    axios
      .post("/reports", reportData) // Replace '/reports' with your actual endpoint
      .then((res) => {
        console.log("Report submitted successfully:", res.data);
        // Reset the form after successful submission
        setReportData({
          sightingLocation: "",
          additionalInfo: "",
        });
      })
      .catch((err) => {
        console.log("Error submitting report:", err.response.data.errMsg);
      });
    
  }

  return (
    <div>
      <h2>Report Sighting</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sight Location:
          <input
            type="text"
            name="sightingLocation"
            value={reportData.sightingLocation}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Additional Info"
          <textarea
            name="additionalInfo"
            value={reportData.additionalInfo}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}
