import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import useFetchHook from '../hooks/useFetchHook';
import PlanetTableItem from './PlanetTableItem';

function PlanetsTable() {
  useFetchHook();
  const { data, loading } = useContext(PlanetsContext);

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
            {data.map((planet) => (<PlanetTableItem
              planet={ planet }
              key={ planet.name }
            />))}
          </tbody>

        </table>
      )
  );
}

export default PlanetsTable;
