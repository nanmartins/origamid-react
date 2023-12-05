import React from 'react'
import { UserContext } from '../../contexts/UserContext'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import MinhasFotos from '../../assets/feed.svg?react'
import Estatisticas from '../../assets/estatisticas.svg?react'
import Adicionar from '../../assets/adicionar.svg?react'
import Sair from '../../assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'
import UseMedia from '../../Hooks/UseMedia'


const UserHeaderNav = () => {

  const navigate = useNavigate()
  const { userLogout } = React.useContext(UserContext)
  const mobile = UseMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const {pathname} = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  const handleLogout = () => {
    userLogout()
    navigate('/login')
  }

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${ mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Conta'}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>

        <NavLink to="/conta/postar">
          <Adicionar />
          {mobile && 'Adicionar foto'}
        </NavLink>

        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
