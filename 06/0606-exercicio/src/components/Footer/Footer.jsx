import React from 'react'

const Footer = () => {

  const footerStyle = {
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d4d4d4',
    margin: '0',
    textAlign: 'center',
  }

  return (
    <section>
      <p style={footerStyle}>
        <span style={{ fontSize: '24px', fontWeight: '900', padding: '0 10px 10px 0'}}>Ranek</span>
        © {new Date().getFullYear()} alguns direitos reservados
      </p>
    </section>
  )
}

export default Footer
