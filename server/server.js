const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(cors());
const PORT = 5050;

app.get("/api", (req, res) => {
  res.send("welcome");
});

const gymSchema = new mongoose.Schema(
    {
        title: String,
        age: Number,
        detail: String,
    },
    {
        timestamps: true
    }
);


const gymModel = mongoose.model("Gym", gymSchema);

app.get ("/api/gym",async (req, res) => {
    try{
        const gyms=await gymModel
        res.send(gyms);
    } catch (err) {
        res.send(err);
    }
})
app.get ("/api/gym/:id",async (req, res) => {
    try{
        const {id} =req.params();
        const gyms=await gymModel
        res.send(gyms);
    } catch (err) {
        res.send(err);
    }
})

app.delete("/api/gym/:id", async (req, res) => {
  try {
    const { id } = req.params();
    const gyms = await gymModel.findByIdAndDelete(id);
    res.send(gyms);
  } catch (err) {
    res.send(err);
  }
});
app.post("/api/gym", async (req, res) => {
  try {
    const newGym = new gymModel(req.body);
    await newGym.save();
    res.send(newGym);
  } catch (err) {
    res.send(err);
  }
});
mongoose
  .connect("mongodb+srv://Rustamrsd:30mart5C@cluster0.dsjshza.mongodb.net/")
  .then(() => console.log("Connected"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
