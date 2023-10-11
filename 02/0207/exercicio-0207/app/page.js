// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};


export default function Home() {
  const dados = mario;
  const total = dados.compras.map((item) => Number(item.preco.replace('R$', ''))).reduce((a, b) => a + b)

  // const totalGasto = () => {
  //   let total = 0;
  //   for (let i = 0; i < dados.compras.length; i++) {
  //     total += parseFloat(dados.compras[i].preco.replace('R$', ''));
  //   }
  //   return total;
  // }
  return (
    <div style={{fontWeight: 'bold'}}>
      <h2>Nome: {dados.cliente}</h2>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={{ color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>Total gasto: R${total}</p>
      {total > 10000 && <p>Voce esta gastando muito</p>}
    </div>
  )
}
