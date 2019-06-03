var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Example' });
});

const person =[{
  path: 'anish',
  name:'Anish',
    age: 24,
    cityResiding: 'vadodara',
    CityBorn: 'Vadodara',
    Likes:'Games',
   
}]

router.get('/Anish', (req,res, next) => {
  res.render('person',{
    name:'Anish',
    age: 24,
    cityResiding: 'vadodara',
    CityBorn: 'Vadodara',
    Likes:'Games',
   
  });
});

router.get('/Sukruti', (req,res, next) => {
  res.render('person',{
    name:'Sukruti',
    age: 27,
    cityResiding: 'vadodara',
    CityBorn: 'Vadodara',
    Likes:'Travelling',
    relation:'Sister'
  });
});

router.get('/Shailesh', (req,res, next) => {
  res.render('person',{
    name:'Shailesh',
    age: 62,
    cityResiding: 'vadodara',
    CityBorn: 'Vadodara',
    Likes:'Photography',
    relation:'Father'
  });
});

router.get('/Dipali', (req,res, next) => {
  res.render('person',{
    name:'Dipali',
    age: 57,
    cityResiding: 'vadodara',
    CityBorn: 'Vadodara',
    Likes:'Cooking',
    relation:'mother'
  });
});

router.get('/Andy', (req,res, next) => {
  res.render('person',{
    name:'Andy',
    age: 27,
    cityResiding: 'vadodara',
    CityBorn: 'Vadodara',
    Likes:'Gaming',
    relation:'brother'});
});

router.get('/:name',(req, res, next) => {
  const name = req.params.name;
  console.log('name');
  const person =perosns.find(per => per.path ===name)
  console.log(person);
  res.render('index', { title: 'Example' });
});
module.exports = router;
