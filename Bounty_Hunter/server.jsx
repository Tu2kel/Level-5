const express = require('express')
const app = express()
const morgan = require("morgan");

//Middleware for all req
app.use(express.json()) // 𝘓𝘰𝘰𝘬𝘴 𝘧𝘰𝘳 𝘢 𝘳𝘦𝘲 𝘣𝘰𝘥𝘺, 𝘢𝘯𝘥 𝘵𝘶𝘳𝘯𝘴 𝘪𝘵 𝘪𝘯𝘵𝘰 '𝘳𝘦𝘲.𝘣𝘰𝘥𝘺'
app.use(morgan('dev')) //𝘓𝘰𝘨𝘴 𝘳𝘦𝘲 𝘵𝘰 𝘤𝘰𝘯𝘴𝘰𝘭𝘦

//Routes
app.use("/bounty", require("./routes/bountyRouter.jsx"));

//Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message}) /* 𝘥𝘳𝘪𝘭𝘭𝘦𝘥 𝘧𝘳𝘰𝘮 𝘣𝘰𝘶𝘯𝘵𝘺𝘙𝘰𝘶𝘵𝘦𝘳 𝘦𝘳𝘳𝘰𝘳 𝘴𝘵𝘳𝘪𝘯𝘨 */
})

//Server Listen
app.listen(7222, ()=> {
    console.log("Server is running on port 7222")
})