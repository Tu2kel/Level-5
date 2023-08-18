import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from '../components/Bounty'
import AddBountyForm from '../components/AddBountyForm'
import AudioPlayer from "../components/AudioPlayer";



export default function App() {

  const [bounties, setBounty] = useState([])

  function getBounty (){
    axios
      .get("/bounty")
      .then(res => setBounty(res.data))
      .catch(err => console.log(err.res.data.errMsg
        ))
      // .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios
      .post("/bounty", newBounty)
      .then((res) => {
        
        setBounty((prevBounties) => [...prevBounties, res.data]);
      })

      .catch((err) => console.log("Error: ", err));
  }

  


  function deleteBounty(bountyId){

      axios
        .delete(`/bounty/${bountyId}`)
        .then((res) => {
          setBounty((prevBounties) =>
            prevBounties.filter((bounties) => bounties._id !== bountyId)
          )

        })
        .catch (err => console.log(err ))
  }

  function editBounty(updates, bountyId){
    console.log("Edit Bounty clicked", " updates", updates , "bountyId", bountyId);
      axios
        .put(`/bounty/${bountyId}`, updates)
        .then((res) =>
          setBounty(prevBounties =>
            prevBounties.map(bounty =>
              bounty._id !== bountyId ? bounty : res.data
            )
          )
        )
        .catch((err) => console.log(err));
  }

  useEffect(() => {
    getBounty();

  }, [])


  return (
    <div>
      <AudioPlayer  />
      <div className="bounty_container">
        <AddBountyForm submit={addBounty} btnText="Add Bounty" />
        {bounties.map((bounty) => (
          <Bounty
            {...bounty}
            key={bounty._id}
            deleteBounty={deleteBounty}
            editBounty={editBounty}
          />
        ))}
      </div>
      {/* <AudioPlayer /> */}
    </div>
  );
 
  
}
