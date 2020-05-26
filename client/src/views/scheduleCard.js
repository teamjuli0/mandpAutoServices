import React from 'react'
import { MechanicCardImg } from '../images/backgrounds'

const ScheduleCard = () => (
  <div
    className='row'
    style={{
      margin: 'auto',
      width: '280px',
      fontFamily: 'Bebas Neue, cursive',
      boxShadow: '0 0 25px #374044',
      MozBoxShadow: '0 0 25px #374044',
      WebkitBoxShadow: '0 0 25px #374044',
      borderRadius: '3px',
      overflow: 'hidden',
    }}
  >
    <div
      className='col-sm-12'
      style={{
        background: `url(${MechanicCardImg})`,
        backgroundPosition: 'center',
        height: '300px',
        align: 'center',
        backgroundSize: 'cover',
      }}
    />
    <div
      className='col-sm-12'
      style={{
        backgroundColor: 'white',
        minHeight: '290px',
        padding: '0',
      }}
    >
      <div
        className='row'
        style={{
          height: '251px',
          margin: 'auto',
        }}
      >
        <div className='col-sm-12'>
          <div
            className='row'
            style={{
              height: '41px',
              background: '#2e3133',
            }}
          >
            <div
              style={{
                margin: 'auto',
                width: '85%',
              }}
            >
              <h1
                style={{
                  fontSize: '30px',
                  color: '#e8e8e8',
                  paddingTop: '3px',
                  letterSpacing: '1.5px',
                }}
              >
                Hours of Operation
              </h1>
            </div>
          </div>
          <div
            className='row'
            style={{
              height: '210px',
            }}
          >
            <div
              style={{
                height: '30px',
                width: '100%',
                background: '#7a7d80',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                paddingTop: '2px',
                color: '#c9cbcc',
                letterSpacing: '1.5px',
              }}
            >
              <div
                style={{
                  paddingLeft: '7.5%',
                  width: '40%',
                  textAlign: 'left',
                }}
              >
                <h1>Monday:</h1>
              </div>
              <div
                style={{
                  width: '60%',
                }}
              >
                <h1>8 AM - 5 PM</h1>
              </div>
            </div>
            <div
              style={{
                height: '30px',
                width: '100%',
                background: '#6d7073',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                paddingTop: '2px',
                color: '#c9cbcc',
                letterSpacing: '1.5px',
              }}
            >
              <div
                style={{
                  paddingLeft: '7.5%',
                  width: '40%',
                  textAlign: 'left',
                }}
              >
                <h1>Tuesday:</h1>
              </div>
              <div
                style={{
                  width: '60%',
                }}
              >
                <h1>8 AM - 5 PM</h1>
              </div>
            </div>
            <div
              style={{
                height: '30px',
                width: '100%',
                background: '#7a7d80',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                paddingTop: '2px',
                color: '#c9cbcc',
                letterSpacing: '1.5px',
              }}
            >
              <div
                style={{
                  paddingLeft: '7.5%',
                  width: '40%',
                  textAlign: 'left',
                }}
              >
                <h1>Wednesday:</h1>
              </div>
              <div
                style={{
                  width: '60%',
                }}
              >
                <h1>8 AM - 5 PM</h1>
              </div>
            </div>
            <div
              style={{
                height: '30px',
                width: '100%',
                background: '#6d7073',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                paddingTop: '2px',
                color: '#c9cbcc',
                letterSpacing: '1.5px',
              }}
            >
              <div
                style={{
                  paddingLeft: '7.5%',
                  width: '40%',
                  textAlign: 'left',
                }}
              >
                <h1>Thursday: </h1>
              </div>
              <div
                style={{
                  width: '60%',
                }}
              >
                <h1>8 AM - 5 PM</h1>
              </div>
            </div>
            <div
              style={{
                height: '30px',
                width: '100%',
                background: '#7a7d80',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                paddingTop: '2px',
                color: '#c9cbcc',
                letterSpacing: '1.5px',
              }}
            >
              <div
                style={{
                  paddingLeft: '7.5%',
                  width: '40%',
                  textAlign: 'left',
                }}
              >
                <h1>Friday: </h1>
              </div>
              <div
                style={{
                  width: '60%',
                }}
              >
                <h1>8 AM - 5 PM</h1>
              </div>
              <h1></h1>
            </div>
            <div
              style={{
                height: '30px',
                width: '100%',
                background: '#6d7073',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                paddingTop: '2px',
                color: '#c9cbcc',
                letterSpacing: '1.5px',
              }}
            >
              <div
                style={{
                  paddingLeft: '7.5%',
                  width: '40%',
                  textAlign: 'left',
                }}
              >
                <h1>Saturday:</h1>
              </div>
              <div
                style={{
                  width: '60%',
                }}
              >
                <h1>8 AM - 5 PM</h1>
              </div>
            </div>
            <div
              style={{
                height: '30px',
                width: '100%',
                background: '#7a7d80',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                paddingTop: '2px',
                color: '#c9cbcc',
                letterSpacing: '1.5px',
              }}
            >
              <div
                style={{
                  paddingLeft: '7.5%',
                  width: '40%',
                  textAlign: 'left',
                }}
              >
                <h1>Sunday:</h1>
              </div>
              <div
                style={{
                  width: '60%',
                }}
              >
                <h1>Closed</h1>
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
          padding: '5px 0',
        }}
      >
        <div
          style={{
            width: '85%',
          }}
        >
          <p>Welcome, Come Visit Us Today!</p>
        </div>
      </div>
    </div>
  </div>
)

export default ScheduleCard
