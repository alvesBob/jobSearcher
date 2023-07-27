const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// test route
router.get('/test', (req, res) => {
    res.send('Working');
})

// add job via post
router.post('/add', (req, res) => {
   
    let {title, salary, company, description, email, new_job} = req.body;

    //insert

    Job.create({
        title: title,
        salary: salary,
        company: company,
        description: description,
        email: email,
        new_job: new_job
    })
    .then(()=>res.redirect('/'))
    .catch(err=>console.log(err));
})

module.exports = router