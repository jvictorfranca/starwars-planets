import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import NewFilter from './NewFilter';

function Filters() {
  const [filtersLeft, setFiltersLeft] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const { filters } = useContext(PlanetsContext);

  // useEffect(() => {
  //   let newFiltersLeft = [...filtersLeft];
  //   filters.filterByNumericValues.forEach((filter) => {
  //     newFiltersLeft = newFiltersLeft.filter((item) => item !== filter.column);
  //   });
  //   setFiltersLeft(newFiltersLeft);
  //   console.log(filtersLeft, newFiltersLeft);
  // }, [filtersLeft, filters.filterByNumericValues]);

  let newFiltersLeft = [...filtersLeft];
  useEffect(() => {
    filters.filterByNumericValues.forEach((filter) => {
      newFiltersLeft = newFiltersLeft.filter((item) => item !== filter.column);
      console.log(filter);
    });
    setFiltersLeft(newFiltersLeft);
    console.log(newFiltersLeft);
  }, [filters.filterByNumericValues]);

  return (
    <section>
      <NewFilter options={ newFiltersLeft } />
    </section>
  );
}

export default Filters;
