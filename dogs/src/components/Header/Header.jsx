import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import Dogs from '../../assets/dogs.svg?react'
import styles from './Header.module.css'

const Header = () => {

  const {data, userLogout } = React.useContext(UserContext)
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login} >
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login} >
            Login / Criar
          </Link>
        )}
        {/* <Link to="/login" className={styles.login} >Login / Criar</Link> */}
      </nav>
    </header>
  )
}

export default Header
