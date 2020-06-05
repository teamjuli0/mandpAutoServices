import React from 'react'
import { ScheduleCard } from './'
import { ArrowRight } from '../images/other'

const Services = [
  {
    categorie: 'Fluid Flush',
    type: [
      { name: 'Oil Flush Service', price: '24.99' },
      { name: 'Diff-Fluid/Sync Service', price: '69.98' },
      { name: 'P/S Fluid/Sync Flush', price: '79.98' },
      { name: 'Cooling System Flush', price: '79.98' },
      { name: 'Transmission Fluid Flush', price: '144.98' },
      { name: 'Full System Flush', price: '144.98' },
      { name: 'CVT-Synthetic', price: '179.98' },
    ],
  },
  {
    categorie: 'Oil Change',
    type: [
      { name: 'Conventional Oil', price: '19.99' },
      { name: 'Synthetic Blend', price: '29.99' },
      { name: 'Full Synthetic', price: '44.99' },
      { name: 'Mobil-1', price: '84.99' },
      { name: 'Castrol Edge', price: '84.99' },
    ],
  },
  {
    categorie: 'Maintenance',
    type: [
      { name: 'Wiper Blade/Premium', price: '14.99 each' },
      { name: 'Tire Rotation', price: '15.00' },
      { name: 'Air Filter', price: '19.98' },
      { name: 'Cabin Air Filter', price: '19.98' },
      { name: 'A/C Service', price: '59.98' },
      { name: 'Fuel Induction Service', price: '79.98' },
      { name: 'Serpentine Belt', price: '79.98' },
    ],
  },
  {
    categorie: 'Brakes',
    type: [
      { name: 'Brake Fluid Flush', price: '69.98' },
      { name: 'New Rotors (Pairs)', price: '89.98' },
      { name: 'Front Brakes', price: '129.98' },
      { name: 'Rear Brakes', price: '139.98' },
    ],
  },
  {
    categorie: 'Tune-Ups',
    type: [
      { name: 'Tune-Up 4 Cyls', price: '94.98' },
      { name: 'Tune-Up 6 Cyls', price: '139.98' },
      { name: 'Tune-Up 8 Cyls', price: '169.98' },
    ],
  },
  // { name: '(626)522-0251', price: 'Questions?' },
]

const isEven = (num) => {
  return num % 2 == 0
}

class Schedule extends React.Component {
  state = {
    isMobile: true,
    isTop: true,
    currentSize: '',
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isMobile = window.innerWidth < 768
      const isTop = window.scrollY < 100
      const isTopBg = window.scrollY > 250
      let currentSize = ''

      let getSize = () => {
        if (window.innerWidth < 576) {
          currentSize = 'isSm'
        } else if (window.innerWidth < 769) {
          currentSize = 'isMd'
        } else {
          currentSize = 'isLg'
        }

        switch (currentSize) {
          case 'isSm':
            this.setState({ currentSize })
            break
          case 'isMd':
            this.setState({ currentSize })
            break
          case 'isLg':
            this.setState({ currentSize })
            break

          default:
            break
        }
      }

      if (isMobile !== this.state.isMobile) {
        this.setState({ isMobile })
      }

      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }

      if (isTopBg !== this.state.isTopBg) {
        this.setState({ isTopBg })
      }

      getSize()
    })
  }

  render() {
    return (
      <>
        <div
          className='css-selector'
          style={{
            borderTop: '3px solid #6f7274',
            zIndex: 1,
            position: 'relative',
            height: '100%',
            width: '100%',
            padding: '50px 0',
          }}
        >
          <div
            className='row'
            style={{
              margin: '0 auto',
              maxWidth: '1000px',
            }}
          >
            <div
              className='col-8'
              style={{
                minWidth: '310px',
                maxWidth: '710px',
                padding: '0',
                margin: 'auto',
              }}
            >
              {Services.map((service, i) => {
                return (
                  <>
                    <div
                      className='row'
                      style={{
                        margin: '30px 10px',
                        fontFamily: 'Bebas Neue',
                        backgroundColor: '#4b5356',
                        padding: '10px 8px 8px 8px',
                        borderRadius: '7px',
                        border: '3px solid #73797c',
                        boxShadow: '0 0 5px black',
                        MozBoxShadow: '0 0 5px black',
                        WebkitBoxShadow: '0 0 5px black',
                      }}
                    >
                      <div
                        className='col-12'
                        style={{
                          margin: '0 2px',
                          color: '#edeeef',
                          fontSize: '26px',
                        }}
                      >
                        <div className='row'>
                          <p
                            style={{
                              backgroundColor: '#2d3338',
                              padding: '8px 10px 4px 10px',
                              marginBottom: '8px',
                              boxShadow: '0 0 10px #374044',
                              MozBoxShadow: '0 0 10px #374044',
                              WebkitBoxShadow: '0 0 10px #374044',
                            }}
                          >
                            {service.categorie}
                          </p>
                        </div>
                      </div>
                      {service.type.map((serviceType) => {
                        return (
                          <div
                            className='col-6'
                            style={{
                              padding: '0 2px',
                              fontSize: '20px',
                              margin: '2px 0 5px 0',
                              color: '#293138',
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: '#edeeef',
                                padding: '3px 0 2px 5px',
                                boxShadow: '0 0 10px #374044',
                                MozBoxShadow: '0 0 10px #374044',
                                WebkitBoxShadow: '0 0 10px #374044',
                              }}
                            >
                              {serviceType.name}{' '}
                              <span>
                                <img
                                  style={{
                                    height: '12px',
                                  }}
                                  src={ArrowRight}
                                />
                              </span>{' '}
                              ${serviceType.price}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </>
                )
              })}
            </div>

            <div
              className='col-4'
              style={{
                margin: 'auto',
                minWidth: '290px',
              }}
            >
              <ScheduleCard />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Schedule

{
  /* <div
 
</h1>
<h1
  style={{
    paddingBottom: '8px'
  }}
>
 
</h1>
<h1
  style={{
    paddingBottom: '8px'
  }}
>
  
</h1>
<h1
  style={{
    paddingBottom: '8px'
  }}
>
 
</h1>
<h1
  style={{
    paddingBottom: '8px'
  }}
>

  </span>
</h1>
</div> */
}
