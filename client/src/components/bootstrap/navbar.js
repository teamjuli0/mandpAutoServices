import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { Icon, MenuIcon } from '../../images/logos-and-icons'

class Navbar extends React.Component {
  state = {
    isTop: true,
    isMobile: true,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  handleTogglerClick() {
    if (this.state.isMobile) {
      document.querySelector('.navbar-nav', () => {
        this.style = {}
      })
    }
  }

  render() {
    return (
      <nav
        className={
          this.state.isTop
            ? 'navbar navbar-expand-md fixed-top navbar-dark nav-unscrolled'
            : 'navbar navbar-expand-md fixed-top navbar-dark nav-scrolled'
        }
      >
        <button
          className={
            this.className === 'navbar-toggler'
              ? 'navbar-toggler navbar-toggler-mobile'
              : 'navbar-toggler navbar-toggler-browser'
          }
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <img
            src={MenuIcon}
            alt=''
            style={{
              height: '30px',
            }}
          />
          <div className='navbar-brand'>
            <img
              src={Icon}
              alt=''
              style={{
                padding: '3px 0 3px 6px',
              }}
            />
          </div>
        </button>
        <Link
          to='mainImage'
          smooth={true}
          duration={700}
          className='nav-link'
          style={{
            cursor: 'pointer',
          }}
        >
          <img
            src={Icon}
            alt=''
            style={{
              position: 'absolute',
              top: '12px',
              left: '43px',
            }}
          />
        </Link>

        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link
                to='mainImage'
                smooth={true}
                duration={700}
                className='nav-link'
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
              >
                Location
              </Link>
            </li>
            <div id='empty-nav-div'></div>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
