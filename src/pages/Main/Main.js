import React, { useContext, useEffect } from 'react';
import Unit from '../../components/Unit/Unit';
import TractianContext from '../../context/TractianContext';
import Loading from '../../components/Loading/Loading'
import './Main.css'

function Main() {
  const {
    users,
    getUsers,
    isLoading,
  } = useContext(TractianContext);
  
  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    isLoading 
    ? <Loading />
    : (
      <section className="display-flex">
        <h1 className="title">Bem vindo à Industria Freios Supremos!</h1>
        <h3 className="subtitle">Escolha o seu usuário:</h3>
        {
          users.map((user) => <Unit key={ user.user } credentials={ user } />)
        }
      </section>
    )
  );
}

export default Main;