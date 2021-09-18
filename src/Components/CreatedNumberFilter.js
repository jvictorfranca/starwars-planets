import React, { useContext } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from '../Context/PlanetsContext';

function CreatedNumberFilter({ filter }) {
  const { column, comparison, value } = filter;
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleClick = () => {
    const newfilterByNumericValues = filters.filterByNumericValues
      .filter((item) => item !== filter);
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: newfilterByNumericValues,
    }));
  };
  return (
    <section data-testid="filter">

      <p>{column}</p>
      <p>{comparison}</p>
      <p>{value}</p>
      <button type="button" onClick={ handleClick }>X</button>

    </section>

  );
}
CreatedNumberFilter.propTypes = {
  filter: propTypes.shape({
    column: propTypes.string,
    comparison: propTypes.string,
    value: propTypes.string,
  }).isRequired,
};

export default CreatedNumberFilter;
