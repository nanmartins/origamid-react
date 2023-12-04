import React from 'react'
import { UserContext } from '../../contexts/UserContext'
import { NavLink } from 'react-router-dom'
import {ReactComponent as MinhasFotos} from '../../assets/feed.svg'

const UserHeaderNav = () => {

  const { userLogout } = React.useContext(UserContext)

  return (
    <nav>
      <NavLink to="/conta">
        <MinhasFotos />
      </NavLink>

      <NavLink to="/conta/estatisticas">Estatísticas</NavLink>
      <NavLink to="/conta/postar">Adicionar foto</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  )
}

export default UserHeaderNav
