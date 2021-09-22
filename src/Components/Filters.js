import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import CreatedNumberFilter from './CreatedNumberFilter';
import NewFilter from './NewFilter';

function Filters() {
  const [filtersLeft, setFiltersLeft] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const { filters } = useContext(PlanetsContext);

  useEffect(() => {
    setFiltersLeft(['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water']);
    filters.filterByNumericValues.forEach((filter) => {
      setFiltersLeft((prevState) => prevState.filter((item) => item !== filter.column));
      console.log(filter);
    });
  }, [filters]);

  return (
    <section>
      <NewFilter options={ filtersLeft } />
      <div className="filters-container">
        {filters.filterByNumericValues
          .map((filter, index) => (<CreatedNumberFilter
            filter={ filter }
            key={ index }
          />))}
      </div>
    </section>
  );
}

export default Filters;
