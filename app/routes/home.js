'use strict';

var traceur = require('traceur');
var Project = traceur.require(__dirname + '/../models/project.js');

exports.index = (req, res)=>{
  Project.findAll(projects=>{
    res.render('home/index', {projects:projects, title: 'Portfolio: Home'});
  });
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'Portfolio: About'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {title: 'Portfolio: Contact'});
};
