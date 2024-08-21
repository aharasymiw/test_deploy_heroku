const express = require('express');
const router = express.Router();
const axios = require('axios');

// const planets = [{ name: "Pluto", id: 1 }, { name: "Mars", id: 2 }, { name: "Jupiter", id: 3 }, { name: "Earth", id: 4 }]

router.get('/', (req, res) => {

  // Don't send back the hardcoded dull planets
  // Ask SWAPI for some cool planets
  // and send those instead
    
  // res.send(planets);

  axios.get('https://swapi.dev/api/planets')
  .then((response) => {
    console.log('GET https://swapi.dev/api/planets success', response.data.results);
    const listOfPlanets = response.data.results;
    console.log(listOfPlanets)
    res.send(listOfPlanets)
  })
  .catch((err) => {
    console.log('GET https://swapi.dev/api/planets failed', err);
    res.sendStatus(500);
  })

});


module.exports = router;
