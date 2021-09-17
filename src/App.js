import React from 'react';
import './App.css';
import PlanetsTable from './Components/PlanetsTable';
import PlanetsProvider from './Context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>

      <main>
        <PlanetsTable />
      </main>

    </PlanetsProvider>

  );
}

export default App;
