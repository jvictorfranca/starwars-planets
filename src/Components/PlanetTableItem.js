import React from 'react';

function planetTableItem({ planet }) {
  const { name, rotation_period: rotation, orbital_period: orbital, diameter, climate,
    gravity, terrain, surface_water: water, population, created,
    edited, url, films } = planet;
  return (
    <tr>
      <td>{name}</td>
      <td>{rotation}</td>
      <td>{orbital}</td>
      <td>{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td>{water}</td>
      <td>{population}</td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{url}</td>
      <td>{films.map((film) => <p key={ film }>{film}</p>)}</td>
    </tr>
  );
}

export default planetTableItem;
