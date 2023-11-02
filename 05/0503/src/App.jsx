import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 1rem 2rem;
  border: 2px solid ${({cor}) => cor};
  color: ${({cor}) => cor};
  background: transparent;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${({cor}) => cor};
    color: #fff;
    text-shadow: 1px 1px #000;
  }

  &::after {
    content: '';
    display: block;
    width: 50%;
    margin: 2px auto;
    height: 2px;
    background: ${({cor}) => cor};
    transform: scaleX(2);
    transition: transform 0.3s ease;
  }
`

const BtnRandomColor = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 1rem 2rem;
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: #fff;
  text-shadow: 1px 1px #000;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 50px;
`

const ButtonAdd = styled.button`
  padding: 1rem 2rem;
  background: ${({ativo}) => ativo ? '#000' : '#fff'};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  color: ${({ativo}) => ativo ? '#fff' : '#000'};
  cursor: pointer;

  &:hover {
    background: #4e4e4e;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`

const LinksDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const Title = styled.h1`
  font-size: 2.2rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 0;
  margin: 0;
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #636363;
  font-weight: 300;
  font-style: italic;
`
function App() {

  const [ativo, setAtivo] = React.useState(false)

  const handleClick = () => {
    setAtivo(!ativo)
  }

  return (
    <>
      <HeaderContainer>
        <Title>Logo</Title>

        <LinksDiv>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </LinksDiv>
      </HeaderContainer>

      <Title>Styled components</Title>
      <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae, dignissimos dolore vitae voluptatum facilis doloremque. Laboriosam perspiciatis, minima aliquam, cum optio aliquid eaque debitis veritatis impedit culpa ipsam labore!</Paragraph>

      <br />

      <LinksDiv>
        <ButtonAdd ativo={ativo} onClick={handleClick}>Add</ButtonAdd>
        <Button cor='#ff54ff'>Delete</Button>
      </LinksDiv>

      {ativo && <Paragraph>Ativo</Paragraph>}


      <BtnRandomColor>Random Color</BtnRandomColor>
    </>
  )
}

export default App
