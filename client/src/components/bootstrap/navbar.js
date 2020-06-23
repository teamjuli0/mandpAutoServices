import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { Icon, MenuIcon } from '../../images/logos-and-icons'

class Navbar extends React.Component {
  state = {
    isTop: true,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  render() {
    return (
      <nav
        className={
          this.state.isTop
            ? 'navbar navbar-expand-md fixed-top navbar-dark nav-unscrolled'
            : 'navbar navbar-expand-md fixed-top navbar-dark nav-scrolled'
        }
        style={{
          padding: 0,
          // maxWidth: '1400px',
          margin: 'auto',
        }}
      >
        <a className='navbar-brand' href='/'>
          <img
            src={Icon}
            alt=''
            style={{
              position: 'relative',
              top: '7px',
              left: '20px',
              paddingBottom: '10px',
            }}
          />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{ border: 0 }}
        >
          <img
            src={MenuIcon}
            alt=''
            style={{
              height: '30px',
            }}
          />
        </button>

        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarSupportedContent'
          style={{
            marginTop: '10px',
          }}
        >
          <ul
            className='navbar-nav'
            style={{
              fontFamily: 'Bebas Neue, cursive',
              // fontFamily: 'Bebas',
              fontSize: '20px',
            }}
          >
            <li className='nav-item active'>
              <Link
                to='mainImage'
                smooth={true}
                duration={700}
                className='nav-link'
                style={{
                  cursor: 'pointer',
                }}
              >
                Home
              </Link>
            </li>
            <li className='nav-item active'>
              <Link
                to='schedule'
                smooth={true}
                duration={700}
                className='nav-link'
                style={{
                  cursor: 'pointer',
                }}
              >
                Hours
                <span
                  style={{
                    fontSize: '16px',
                    padding: '0 1.5px',
                  }}
                >
                  &
                </span>
                Services
              </Link>
            </li>
            <li className='nav-item active'>
              <Link
                to='mapid'
                smooth={true}
                duration={700}
                offset={-47}
                className='nav-link'
                style={{
                  cursor: 'pointer',
                }}
              >
                Location
              </Link>
            </li>
            <li className='nav-item active'>
              <Link
                to='aboutus'
                smooth={true}
                duration={700}
                className='nav-link'
                style={{
                  cursor: 'pointer',
                }}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
