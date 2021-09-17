import React, { useContext, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function NewFilter() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleClick = () => {
    const newFilterObject = {
      column,
      comparison,
      value: number,
    };
    const newFilter = {
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        newFilterObject,
      ],
    };
    setFilters(newFilter);
  };
  return (
    <form action="GET">
      <select
        name="column"
        id="column"
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => { setColumn(e.target.value); } }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ number }
        onChange={ (e) => setNumber(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </form>
  );
}

export default NewFilter;
