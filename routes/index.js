var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  menus.getMenus().then(results => {

    res.render('index', {
      title: 'Restaurante saboroso',
      menus: results
    });

  });

router.get('/contacts', function(req, res, next){
  res.render('contact', {
    title: 'Contato - Restaurante Saboroso',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um Oi!'
  });
});

router.get('/menus', function(req, res, next){
  res.render('menu', {
    title: "Menu - Restaurante Saboroso",
    background: 'images/img_bg_1.jpg',
    h1: 'Saboreie nosso menu!'
  });
});

router.get('/reservations', function(req, res, next){
  res.render('reservation', {
    title: "Reserva - Restaurante Saboroso",
    background: 'images/img_bg_2.jpg',
    h1: 'Reserve uma mesa!'
  });
});

router.get('/services', function(req, res, next){
  res.render('services', {
    title: "Serviços - Restaurante Saboroso",
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'
  });
});

module.exports = router;