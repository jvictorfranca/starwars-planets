import React, { useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const contextValue = {
    data,
    setData,
    filter,
    setFilters,
    loading,
    setLoading,
  };
  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.shape({
    typeof: 'Symbol(react.element)',
  }).isRequired,
};

export default PlanetsProvider;
