const express = require("express")
const app = express();
const PORT = 3000

const cors = require("cors")

app.use(cors({
    origin: "http://localhost:3001"
}))

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Hello world from server"})
})

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})