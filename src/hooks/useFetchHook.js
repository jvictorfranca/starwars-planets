import { useContext, useEffect } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function useFetchHook() {
  const { setData, setLoading } = useContext(PlanetsContext);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((dataValue) => {
        setData(dataValue.results);
      }).then(setLoading(false));
  }, [setData, setLoading]);
}

export default useFetchHook;
