// import React, { useState } from "react";
// import axios from "axios";

// //𝘀𝘂𝗯𝗺𝗶𝘁 𝘀𝗶𝗴𝗵𝘁𝗶𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁𝘀

// export default function ReportForm() {
//   const [reportData, setReportData] = useState({
//     sightingLocation: "",
//     additionalInfo: "",
//   });
//   console.log(" ReportForm line 11 reportData:", reportData);

//   function handleInputChange(e) {
//     const { name, value } = e.target;
//     console.log("Input Change Report Form line 15", name, value);
//     setReportData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(e, "ReportForm line 24 Submitting report data:", reportData);//Debug line

//     axios // Send the reportData to the server using axios.post
//       .post("/fugitives/reports", reportData) // Replace '/reports' with your actual endpoint
//       .then((res) => {
//         console.log("Report submitted successfully:", res.data);
//         // handles successful submission
//         setReportData({
//           sightingLocation: "",
//           additionalInfo: "",
//         });
//       })
//       .catch((err) => {
//         console.log("Error submitting report:", err.response.data.errMsg);
//       });
//   }

//   return (
//     <div>
//       <h2>Report Sighting</h2>
//       <form onSubmit={handleSubmit} className="report" >
//         <label>
//           Sight Location:
//           <input
//             type="text"
//             name="sightingLocation"
//             value={reportData.sightingLocation}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Additional Info"
//           <textarea
//             name="additionalInfo"
//             value={reportData.additionalInfo}
//             onChange={handleInputChange}
//           ></textarea>
//         </label>
//         <button type="submit">Submit Report</button>
//       </form>
//     </div>
//   );
// }
