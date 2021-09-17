import React from 'react';
import './App.css';
import Filters from './Components/Filters';
import NameFilter from './Components/NameFilter';
import PlanetsTable from './Components/PlanetsTable';
import PlanetsProvider from './Context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>

      <main>
        <NameFilter />
        <Filters />
        <PlanetsTable />
      </main>

    </PlanetsProvider>

  );
}

export default App;
