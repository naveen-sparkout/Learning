const { reset } = require('nodemon');

var userModel = require('../models/user.model');

exports.userCreate = (req, res, next) => {
    req.body.active = true;
    userModel.create(req.body, (err, r_user) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_user);
        }
    });
}

exports.readUser = (req, res, next) => {
    console.log("inside");
    let _query = {};
    
    if(Object.keys(req.query).length) {
        _query = req.query;
        console.log("req query",req.query);
        if(_query.active) _query.active = _query.active === 'true' ? true : false;
        
          if(req.body.email) _query.email = {$in: req.body.email.map((item) => new RegExp(item, 'i'))};   
        
    }
    console.log("query",_query);   
    userModel.find(_query, (err, r_user) => {
     
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_user);
            // console.log(r_user);
            reset()
        }
    }); 
  }