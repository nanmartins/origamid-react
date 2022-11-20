import React from 'react'

const Ex4Hooks = () => {

  // versao explicativa, para mostrar em detalhes a funcionalidade
  // const ativoHook = React.useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];

  // function handleClick() {
  //   atualizaValor(!ativoValor);
  // }

  // return (
  //   <React.Fragment>
  //     <button onClick={handleClick}>{ativoValor ? 'Ativo' : 'Inativo'}</button>
  //   </React.Fragment>
  // )

  // versao desestruturada, a forma mais comum de usar os hooks
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </React.Fragment>
  );
}

export default Ex4Hooks
