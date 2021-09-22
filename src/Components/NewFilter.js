import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from '../Context/PlanetsContext';

function NewFilter({ options }) {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const { filters, setFilters } = useContext(PlanetsContext);

  useEffect(() => {
    setColumn(options[0]);
  }, [options]);

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
    options.length > 0
    && (
      <form action="GET" className="new-filter">
        {/* <select
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
      </select> */}

        <select
          name="column"
          id="column"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => { setColumn(e.target.value); } }
        >
          {options.map(((optionValue, index) => (
            <option
              value={ optionValue }
              key={ index }
            >
              {optionValue}
            </option>)
          ))}
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
      </form>)
  );
}

NewFilter.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
};

export default NewFilter;
