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

exports.faq = (req, res)=>{
  res.render('home/faq', {title: 'Portfolio: FAQ'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {title: 'Portfolio: Contact'});
};

exports.resume = (req, res)=>{
  res.render('home/resume', {title: 'Node.js: Resume'});
};
