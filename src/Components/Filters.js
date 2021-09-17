import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import NewFilter from './NewFilter';

function Filters() {
  const [filtersLeft, setFiltersLeft] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const { filters } = useContext(PlanetsContext);

  useEffect(() => {
    filters.filterByNumericValues.forEach((filter) => {
      setFiltersLeft((prevState) => prevState.filter((item) => item !== filter.column));
      console.log(filter);
    });
  }, [filters.filterByNumericValues]);

  return (
    <section>
      <NewFilter options={ filtersLeft } />
    </section>
  );
}

export default Filters;
