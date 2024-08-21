import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import PlanetList from '../PlanetList/PlanetList';
// If you want to create a custom "theme", in other words, overwrite the default colors of things
// You want to import this

// Then create a theme customization object

function App() {

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = () => {
    axios.get('/api/planets')
      .then((res) => {
        console.log('GET /api/planets success:', res.data);
        setPlanets(res.data);
      })
      .catch((err) => {
        console.log('GET /api/planets failed:', err);
      })
  };

  return (
    <>
    {/* Then wrap your app in the ThemeProvider you imported. */}
        <PlanetList planets={planets} />
    </>
  )
}

export default App
