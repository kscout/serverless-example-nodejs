#!/usr/bin/env node
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

const port =  process.env.APP_PORT || 3000

app.get("/time", (req, res) => {
    res.json({
	epoch: Date.now()
    })
})

app.post("/calculate/add", (req, res) => {
    if (!req.body.lhs || !req.body.lhs) {
	res.status(400).json({ error: "bad request" })
	return
    }

    if (isNaN(req.body.lhs) || isNaN(req.body.rhs)) {
	res.status(400).json({ error: "bad request" })
	return
    }

    const lhs = parseInt(req.body.lhs)
    const rhs = parseInt(req.body.rhs)

    res.json({
	result: lhs + rhs
    })
})

app.get("/health", (req, res) => {
    res.json({
	"ok": true
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
