const express = require("express");
const app = express();
const morgan = require("morgan"); //r͟e͟q͟u͟e͟s͟t h͟a͟n͟d͟l͟i͟n͟g a͟n͟d l͟o͟g͟g͟i͟n͟g
const mongoose = require("mongoose"); //c͟o͟n͟n͟e͟c͟t͟s t͟o M͟o͟n͟g͟o͟D͟B u͟s͟i͟n͟g M͟o͟n͟g͟o͟o͟s͟e


//𝗠𝗶𝗱𝗱𝗹𝗲𝘄𝗮𝗿𝗲 𝗳𝗼𝗿 𝗮𝗹𝗹 𝗿𝗲𝗾
app.use(express.json()); // 𝘓𝘰𝘰𝘬𝘴 𝘧𝘰𝘳 𝘢 𝘳𝘦𝘲 𝘣𝘰𝘥𝘺, 𝘢𝘯𝘥 𝘵𝘶𝘳𝘯𝘴 𝘪𝘵 𝘪𝘯𝘵𝘰 '𝘳𝘦𝘲.𝘣𝘰𝘥𝘺'

app.use(morgan("dev")); //𝘓𝘰𝘨𝘴 𝘳𝘦𝘲 𝘵𝘰 𝘤𝘰𝘯𝘴𝘰𝘭𝘦

mongoose.set("strictQuery", true);

//𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝘁𝗼 𝗗𝗕
mongoose.connect(
  "mongodb+srv://anthonykkelley:s1p8LXvVLbylujkn@cluster0.2jvymz4.mongodb.net/",
  (err) => {
    console.log("connected to DB", err);
  }
);

//𝗥𝗼𝘂𝘁𝗲𝘀
app.use("/fugitives", require("./routes/fugitiveRouter.js"));

//𝗘𝗿𝗿𝗼𝗿 𝗛𝗮𝗻𝗱𝗹𝗲𝗿
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({
    errMsg: err.message,
  }); /* 𝘥𝘳𝘪𝘭𝘭𝘦𝘥 𝘧𝘳𝘰𝘮 𝘣𝘰𝘶𝘯𝘵𝘺𝘙𝘰𝘶𝘵𝘦𝘳 𝘦𝘳𝘳𝘰𝘳 𝘴𝘵𝘳𝘪𝘯𝘨  --> Message sent to Front End*/
});

/*-------------------------------------------------------------------------------------- */

/*-------------------------------------------------------------------------------------- */

//𝗦𝗲𝗿𝘃𝗲𝗿 𝗟𝗶𝘀𝘁𝗲𝗻
app.listen(7222, () => {
  console.log("Server is running on port 7222");
});
