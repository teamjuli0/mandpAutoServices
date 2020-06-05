import React from 'react'

const LandingPage = (props) => (
  <>
    <div
      className='container-fluid'
      style={{
        width: '100%',
        padding: '0',
        background: '#e0e0e0',
      }}
    >
      {props.children}
    </div>
    <a
      style={{
        position: 'fixed',
        zIndex: '9999',
        bottom: '53px',
        right: '10px',
        fontFamily: 'Bebas Neue, cursive',
        backgroundColor: '#326598',
        animationName: 'color',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        color: 'white',
        fontSize: '32px',
        padding: '8px 12px 5px 12px',
        borderRadius: '3px',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      href='tel:626-522-0251'
    >
      Call Now!
    </a>
  </>
)

export default LandingPage
