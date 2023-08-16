const express = require("express");
const bountyRouter = express.Router();
const { v4: uuid } = require("uuid");

//Bounties
//#region 
const bounties = [
  {
    type: "Sith Lord",
    First_Name: "Darth",
    Last_Name: "Sidious",
    isAlive: true,
    BountyAward: 230000 ,
    imgUrl: "https://tinyurl.com/zb5m6bsj",
    _id: uuid(),
  },

  {
    type: "Sith Lord",
    First_Name: "Darth",
    Last_Name: "Maul",
    isAlive: true,
    BountyAward: 60000,
    imgUrl: "https://tinyurl.com/bdhj62j8",
    _id: uuid(),
  },

  {
    type: "Sith Lord",
    First_Name: "Darth",
    Last_Name: "Bane",
    isAlive: true,
    BountyAward: 15000,
    imgUrl: "https://tinyurl.com/2hmpxmev",
    _id: uuid(),
  },

  {
    type: "Sith Lord",
    First_Name: "Darth",
    Last_Name: "Tyranus",
    isAlive: true,
    BountyAward: 10000,
    imgUrl: "https://tinyurl.com/rtv4fyy7",
    _id: uuid(),
  },

  {
    type: "Jedi",
    First_Name: "Mace",
    Last_Name: "Windu",
    isAlive: true,
    BountyAward: 10000,
    imgUrl: "https://tinyurl.com/3y3wupra",
    _id: uuid(),
  },

  {
    type: "Jedi",
    First_Name: "Master",
    Last_Name: "Revan",
    isAlive: true,
    BountyAward: 30000,
    imgUrl: "https://tinyurl.com/ycybmkf3",
    _id: uuid(),
  },
]; 
//#endregion
/*-------------------------------END OF BOUNTY LIST------------------------------------*/

//Get All
bountyRouter
  .route("/")
  .get((req, res) => {
    res.send(bounties);
  })

//Get One
bountyRouter
  .get("/:bountyId", (req, res, next) => {
    // console.log(req.params._id);
    const bountyId = req.params.bountyId;
    const foundBounty = bounties.find((bounty) => bounty._id === bountyId);
      if (!foundBounty){                        /*𝘋𝘪𝘥𝘯'𝘵 𝘧𝘪𝘯𝘥 𝘉𝘰𝘶𝘯𝘵𝘺 */
        const error = new Error(`Item ${bountyId} Not Found`)  /* 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘌𝘳𝘳𝘰𝘳 */
        return next(error)                        /* 𝘳𝘦𝘵𝘶𝘳𝘯𝘦𝘥 𝘯𝘦𝘹𝘵 𝘸𝘪𝘵𝘩 𝘵𝘩𝘦 𝘦𝘳𝘳𝘰𝘳 𝘱𝘢𝘴𝘴𝘦𝘥 𝘵𝘰 𝘌𝘳𝘳𝘰𝘳 𝘏𝘢𝘯𝘥𝘭𝘦𝘳 𝘪𝘯 𝘴𝘦𝘳𝘷𝘦𝘳.𝘫𝘴𝘹 */
      }
    /*console.log(foundBounty); DELETE AKK*/
    res.send(foundBounty);
  })

  //Post one
  bountyRouter
  .post( "/", ( req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.status(201).json(newBounty);
    // res.send(newBounty);
  });

  //Delete One
  bountyRouter.delete('/:bountyId', (req, res)=> {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully Deleted from DB`);
  })

  //Update One
  bountyRouter.put ('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = {
      ...bounties[bountyIndex],
      ...req.body,
    };
 
    res.send(updatedBounty)
  })

module.exports = bountyRouter;
