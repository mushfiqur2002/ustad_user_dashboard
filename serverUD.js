const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const path = require('path')
const port = 3600
const bodyParser = require("body-parser")
const cros = require('cros')

const app = express()
app.use(cros())
app.use(bodyParser())

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });


const memberSchema = new mongoose.Schema({
        name: String,
        designation: String,
        current: [
          {
            institution: String,
            department: String,
            role: String,
          }
        ],
        
        education: [
          {
            degree: String,
            field: String,
            institution: String,
            status: String,
            scholarship: String,
          },
        ],
        research_areas: [String],
        social_links: {
          twitter: String,
          linkedin: String,
          facebook: String,
        },
        photo: String,
        company_role: String,
        bio: String,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.post('/submit',async (req , res) => {
  try {
    const data = req.body;

    const formData = new FormData(data);
    await formData.save();

    res.status(200).json({message : 'form data save'})
    
  } catch (error) {
    console.log('error : ', error);
    res.status(500).json({message : 'failed to save data'})
  }
})