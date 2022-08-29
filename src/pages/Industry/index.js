import React, { useContext } from 'react';
import CRUD from '../../components/CRUD';
import TractianContext from '../../context/TractianContext';

function Industry() {
  const context = useContext(TractianContext);

  return (
    <main>
      <h1 className="title">{ context.industryName }</h1>
      <CRUD />
    </main>
  );
}

export default Industry;