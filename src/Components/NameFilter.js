import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function NameFilter() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleNameInput = (e) => {
    setFilters({ ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  return (
    <input
      type="text"
      onChange={ handleNameInput }
      data-testid="name-filter"
      value={ filters.filterByName.name }
      className="name-filter"
      placeholder="Search by name:"
    />
  );
}

export default NameFilter;
