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
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{
            border: 0,
            height: '47px',
          }}
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
                position: 'relative',
                top: '7px',
                left: '12px',
                paddingBottom: '10px',
              }}
            />
          </div>
        </button>
        <div className='navbar-brand'>
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
                position: 'relative',
                top: '7px',
                paddingBottom: '10px',
              }}
            />
          </Link>
        </div>

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
            <div
              style={{
                width: '190px',
              }}
            ></div>
            {/* <li className='nav-item active'>
              <a
                href='https://www.google.com/maps/place/M%26P+AUTO+SERVICE/@34.0714705,-118.0556085,18z/data=!3m1!4b1!4m5!3m4!1s0x80c2d1bd74c220fd:0x2db195450267c222!8m2!3d34.0714705!4d-118.0545142'
                className='nav-link'
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#991919',
                  // height: '100%',
                  paddingBottom: '6px',
                  margin: '-6px 0 0 10px',
                }}
              >
                Find Us
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
