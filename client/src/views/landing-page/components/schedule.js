import React from 'react'
import { BeardCream } from '../../../images/other'
import { ScheduleBackground } from '../../../images/backgrounds'

class Schedule extends React.Component {
  state = {
    isMobile: true,
    isTop: true
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isMobile = window.innerWidth < 768
      const isTop = window.scrollY < 100

      const isTopBg = window.scrollY > 250
      if (isMobile !== this.state.isMobile) {
        this.setState({ isMobile })
      }

      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }

      if (isTopBg !== this.state.isTopBg) {
        this.setState({ isTopBg })
      }
    })
  }

  render() {
    return (
      <>
        <div
          style={
            this.state.isTopBg
              ? {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  transition: 'background-color 0.25s ease-in',
                  zIndex: 1,
                  position: 'relative',
                  // background: '#e0e0e0',
                  // padding: '50px 0',
                  height: '100%',
                  padding: '50px 0',
                  width: '100%'
                }
              : {
                  zIndex: 1,
                  position: 'relative',
                  // padding: '50px 0',
                  height: '100%',
                  width: '100%',
                  padding: '50px 0',
                  backgroundColor: 'rgb(224,224,224)',
                  transition: 'background-color 0.25s ease-in'
                }
          }
        >
          <div
            className='row'
            style={{
              margin: 'auto',
              width: '85vw',
              fontFamily: 'Bebas Neue, cursive',
              maxWidth: '1000px',
              boxShadow: '0 0 25px #5d5547',
              MozBoxShadow: '0 0 25px #5d5547',
              WebkitBoxShadow: '0 0 25px #5d5547',
              borderRadius: '3px',
              overflow: 'hidden'
            }}
          >
            <div
              className='col-sm-5'
              style={{
                background: `url(${BeardCream})`,
                backgroundPosition: 'center',
                // maxWidth: '400px',
                minHeight: '350px',
                align: 'center',
                backgroundSize: 'cover',
                margin: '0'
                // border: '5px solid white'
              }}
            />
            <div
              className='col-sm-7'
              style={{
                // color: '#848d95',
                backgroundColor: 'white',
                minHeight: '350px',
                padding: '0'
                // textAlign: 'left'
                // margin: 'auto 0',
                // padding: '15px'
              }}
            >
              <div
                className='row'
                style={{
                  height: '310px',
                  margin: 'auto'
                }}
              >
                <div className='col-sm-12'>
                  <div
                    className='row'
                    style={{
                      height: '51px',
                      background: '#2e3133'
                    }}
                  >
                    <div
                      style={{
                        // padding: '10px',
                        margin: 'auto',
                        width: '85%'
                      }}
                    >
                      <h1
                        style={{
                          fontSize: '30px',
                          color: '#e8e8e8',
                          // textAlign: 'center',
                          paddingTop: '3px',
                          letterSpacing: '1.5px'
                        }}
                      >
                        Hours of Operation
                      </h1>
                    </div>
                  </div>
                  <div
                    className='row'
                    style={{
                      height: '259px'
                    }}
                  >
                    <div
                      style={{
                        height: '37px',
                        width: '100%',
                        background: '#7a7d80',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        paddingTop: '2px',
                        color: '#c9cbcc',
                        letterSpacing: '1.5px'
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: '7.5%',
                          width: '40%',
                          textAlign: 'left'
                        }}
                      >
                        <h1>Monday:</h1>
                      </div>
                      <div
                        style={{
                          width: '60%'
                        }}
                      >
                        <h1>10 AM - 7 PM</h1>
                      </div>
                    </div>
                    <div
                      style={{
                        height: '37px',
                        width: '100%',
                        background: '#6d7073',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        paddingTop: '2px',
                        color: '#c9cbcc',
                        letterSpacing: '1.5px'
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: '7.5%',
                          width: '40%',
                          textAlign: 'left'
                        }}
                      >
                        <h1>Tuesday:</h1>
                      </div>
                      <div
                        style={{
                          width: '60%'
                        }}
                      >
                        <h1>10 PM - 5 PM</h1>
                      </div>
                    </div>
                    <div
                      style={{
                        height: '37px',
                        width: '100%',
                        background: '#7a7d80',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        paddingTop: '2px',
                        color: '#c9cbcc',
                        letterSpacing: '1.5px'
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: '7.5%',
                          width: '40%',
                          textAlign: 'left'
                        }}
                      >
                        <h1>Wednesday:</h1>
                      </div>
                      <div
                        style={{
                          width: '60%'
                        }}
                      >
                        <h1>10 AM - 7 PM</h1>
                      </div>
                    </div>
                    <div
                      style={{
                        height: '37px',
                        width: '100%',
                        background: '#6d7073',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        paddingTop: '2px',
                        color: '#c9cbcc',
                        letterSpacing: '1.5px'
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: '7.5%',
                          width: '40%',
                          textAlign: 'left'
                        }}
                      >
                        <h1>Thursday: </h1>
                      </div>
                      <div
                        style={{
                          width: '60%'
                        }}
                      >
                        <h1>10 AM - 7 PM</h1>
                      </div>
                    </div>
                    <div
                      style={{
                        height: '37px',
                        width: '100%',
                        background: '#7a7d80',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        paddingTop: '2px',
                        color: '#c9cbcc',
                        letterSpacing: '1.5px'
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: '7.5%',
                          width: '40%',
                          textAlign: 'left'
                        }}
                      >
                        <h1>Friday: </h1>
                      </div>
                      <div
                        style={{
                          width: '60%'
                        }}
                      >
                        <h1>9 AM - 7 PM</h1>
                      </div>
                      <h1></h1>
                    </div>
                    <div
                      style={{
                        height: '37px',
                        width: '100%',
                        background: '#6d7073',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        paddingTop: '2px',
                        color: '#c9cbcc',
                        letterSpacing: '1.5px'
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: '7.5%',
                          width: '40%',
                          textAlign: 'left'
                        }}
                      >
                        <h1>Saturday:</h1>
                      </div>
                      <div
                        style={{
                          width: '60%'
                        }}
                      >
                        <h1>9 AM - 7 PM</h1>
                      </div>
                    </div>
                    <div
                      style={{
                        height: '37px',
                        width: '100%',
                        background: '#7a7d80',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        paddingTop: '2px',
                        color: '#c9cbcc',
                        letterSpacing: '1.5px'
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: '7.5%',
                          width: '40%',
                          textAlign: 'left'
                        }}
                      >
                        <h1>Sunday:</h1>
                      </div>
                      <div
                        style={{
                          width: '60%'
                        }}
                      >
                        <h1>9 AM - 5 PM</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='row'
                style={{
                  minHeight: '40px',
                  backgroundColor: '#2e3133',
                  color: '#e8e8e8',
                  margin: 'auto',
                  fontSize: '21px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  letterSpacing: '1.5px',
                  padding: '5px 0'
                }}
              >
                <div
                  style={{
                    width: '85%'
                  }}
                >
                  <p>Walk-ins Welcome, Appointments Encouraged!</p>
                </div>
              </div>
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
