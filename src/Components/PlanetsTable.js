import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import useFetchHook from '../hooks/useFetchHook';
import PlanetTableItem from './PlanetTableItem';

function PlanetsTable() {
  useFetchHook();
  const { data, loading, filters } = useContext(PlanetsContext);
  let filteredData = data;
  const compareFunction = (planet, filter) => {
    let answer;
    if (filter.comparison === 'maior que') {
      answer = parseInt(planet[filter.column], 10) > parseInt(filter.value, 10);
    } else if (filter.comparison === 'menor que') {
      answer = parseInt(planet[filter.column], 10) < parseInt(filter.value, 10);
    } else if (filter.comparison === 'igual a') {
      answer = parseInt(planet[filter.column], 10) === parseInt(filter.value, 10);
    }
    return answer;
  };
  if (data) {
    filteredData = data.filter((planet) => planet.name
      .includes(filters.filterByName.name));
    filters.filterByNumericValues.forEach((filter) => {
      filteredData = filteredData.filter((planet) => compareFunction(planet, filter));
    });
  }

  return (
    (loading || !data)
      ? <span>Loading...</span>
      : (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>rotation</th>
              <th>orbital</th>
              <th>diameter</th>
              <th>climate</th>
              <th>gravity</th>
              <th>terrain</th>
              <th>water</th>
              <th>population</th>
              <th>created</th>
              <th>edited</th>
              <th>url</th>
              <th>films</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((planet) => (<PlanetTableItem
              planet={ planet }
              key={ planet.name }
            />))}
          </tbody>

        </table>
      )
  );
}

export default PlanetsTable;
