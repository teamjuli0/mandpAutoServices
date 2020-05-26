import React from 'react'

import { Navbar } from '../components/bootstrap'
import { Footer } from '../components/footer'
import { MechanicShop } from '../images/backgrounds'
import { MainImage, Schedule } from './'

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div
          className='container-fluid'
          style={{
            width: '100%',
            padding: '0',
            background: '#e0e0e0',
          }}
        >
          <MainImage background={MechanicShop} />
          <Schedule />
          <Footer />
        </div>
        <a
          style={{
            position: 'fixed',
            zIndex: '1',
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
  }
}

export default LandingPage
