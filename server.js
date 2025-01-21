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
        affiliation: {
          current: {
            institution: String,
            department: String,
            role: String,
          },
        },
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