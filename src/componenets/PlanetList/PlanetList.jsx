import PlanetItem from "../PlanetItem/PlanetItem"

function PlanetList(props) {

  const planets = props.planets;

  return (
    <>
      <h2>Planet List</h2>
      <ul>
        {
          planets.map((planet) => (
            <PlanetItem key={planet.name} planet={planet} />
          ))
        }
      </ul>
    </>
  )
}

export default PlanetList

