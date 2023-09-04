const express = require("express");
const Wanted = require("../model/fugitiveSchema");
const fugitiveRouter = express.Router();

//Get All
fugitiveRouter.get("/", (req, res, next) => {
  Wanted.find((err, fugitives) => {
    if (err) {
      // c͟o͟n͟n͟e͟c͟t͟s t͟o t͟h͟e D͟B D͟a͟t͟a i͟n B͟S.j͟s f͟o͟l͟d͟e͟r
      res.status(500);
      return next(err); // c͟a͟u͟g͟h͟t i͟n s͟e͟r͟v͟e͟r.j͟s E͟r͟r H͟a͟n͟d͟l͟e͟r
    }
    return res.status(201).send(fugitives);
  });
});

//Get One
fugitiveRouter.get("/:fugitiveId", (req, res, next) => {
  const fugitiveId = req.params.fugitiveId;
  const foundFugitive = Wanted.find((fugitive) => fugitive._id === fugitiveId);
  if (!foundFugitive) {
    /*𝘋͟𝘪͟𝘥͟𝘯͟'͟𝘵 𝘧͟𝘪͟𝘯͟𝘥 𝘉͟𝘰͟𝘶͟𝘯͟𝘵͟𝘺 */
    const error = new Error(`Fugitive ${fugitiveId} Not Found in DB `);
    res.status(500);
    return next(
      error
    ); /* 𝘳͟𝘦͟𝘵͟𝘶͟𝘳͟𝘯͟𝘦͟𝘥 𝘯͟𝘦͟𝘹͟𝘵 𝘸͟𝘪͟𝘵͟𝘩 𝘵͟𝘩͟𝘦 𝘦͟𝘳͟𝘳͟𝘰͟𝘳 𝘱͟𝘢͟𝘴͟𝘴͟𝘦͟𝘥 𝘵͟𝘰 𝘌͟𝘳͟𝘳͟𝘰͟𝘳 𝘏͟𝘢͟𝘯͟𝘥͟𝘭͟𝘦͟𝘳 𝘪͟𝘯 𝘴͟𝘦͟𝘳͟𝘷͟𝘦͟𝘳.𝘫͟𝘴͟𝘹 */
  }
  res.status(200).send(foundFugitive);
});


//Post One

fugitiveRouter.post('/', (req, res, next) => {
  // console.log("POST request received", err);
  const newWanted = new Wanted(req.body); /*Create new Fugitive uses data from req.body */
  newWanted.save((err, savedWanted) => {
    if (err) {
      res.status(500);
      return next(err); //i͟f e͟r͟r s͟e͟n͟d s͟t͟a͟t͟u͟s 5͟0͟0, t͟h͟e͟n f͟o͟r͟w͟a͟r͟d t͟o e͟r͟r h͟a͟n͟d͟l͟e͟r i͟n s͟e͟r͟v͟e͟r.j͟s
    }
    return res.status(201).send(newWanted); //𝘚͟𝘦͟𝘯͟𝘥͟𝘴 𝘴͟𝘶͟𝘤͟𝘤͟𝘦͟𝘴͟𝘴͟𝘧͟𝘶͟𝘭 𝘴͟𝘵͟𝘢͟𝘵͟𝘶͟𝘴 𝘣͟𝘦͟𝘧͟𝘰͟𝘳͟𝘦 𝘴͟𝘦͟𝘯͟𝘥͟𝘴 𝘵͟𝘩͟𝘦 𝘥͟𝘢͟𝘵͟𝘢
  });
})

//Delete

fugitiveRouter.delete('/:fugitiveId', (req, res, next)=> {
  Wanted.findOneAndDelete(
    { _id: req.params.fugitiveId }, (err, deleteFugitive) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res
        .status(200)
        .send(
          `Deleted ${deleteFugitive.first_name} ${deleteFugitive.last_name} from Police DB`
        );
    }
  )
})

//𝗚𝗲𝘁 𝗯𝘆 𝘁𝘆𝗽𝗲

fugitiveRouter
.get('/search/type', (req, res, next) => {
  const selectedCrimeType = req.query.type;
  let filter = {}
  if (selectedCrimeType !== "reset") {
    filter.type = selectedCrimeType;
  }
  Wanted.find(filter).exec((err, fugitives) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(fugitives);
  });
})

//𝘂𝗽𝗱𝗮𝘁𝗲 𝗼𝗻𝗲

fugitiveRouter.put('/:fugitiveId', (req, res, next) => {
  Wanted.findOneAndUpdate(
    { _id: req.params.fugitiveId },
    req.body,
    (err, updatedFugitive) => {
      if(err){
        res.status(500)
        return next(err)

      }
      return res.status(201).send(updatedFugitive)
    }
  )
})










module.exports = fugitiveRouter;
