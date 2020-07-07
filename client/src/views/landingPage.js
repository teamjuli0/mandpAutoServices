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
        top: '0',
        right: '105px',
        fontFamily: 'Bebas Neue, cursive',
        backgroundColor: '#991919',
        color: 'white',
        fontSize: '25px',
        padding: '12px 12px 10px 12px',
        // borderRadius: '3px',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      href='https://www.google.com/maps/place/M%26P+AUTO+SERVICE/@34.0714705,-118.0556085,18z/data=!3m1!4b1!4m5!3m4!1s0x80c2d1bd74c220fd:0x2db195450267c222!8m2!3d34.0714705!4d-118.0545142'
    >
      find us
    </a>
    <a
      style={{
        position: 'fixed',
        zIndex: '9999',
        top: '0',
        right: '0',
        fontFamily: 'Bebas Neue, cursive',
        backgroundColor: '#326598',
        animationName: 'color',
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        color: 'white',
        fontSize: '25px',
        padding: '12px 12px 10px 12px',
        // borderRadius: '3px',
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
