import React from 'react'

const FooterMenu = (props) => (
  <>
    <div
      className={props.mobileDevice}
      style={
        props.mobileDevice
          ? {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px',
            }
          : {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px',
              width: '50vw',
            }
      }
    >
      <div
        style={{
          width: '90%',
          color: '#848d95',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            width: '50px',
          }}
        />
        <h1
          style={{
            marginTop: '3px',
            fontSize: '20px',
            color: '#bbc0c4',
          }}
        >
          Menu
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '3px',
            width: '50px',
          }}
        />
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          <a>Location</a>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          <a>
            Hours
            <span
              style={{
                fontSize: '13px',
              }}
            >
              {' '}
              &{' '}
            </span>
            Services
          </a>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          <a>Our Team</a>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          <a>T-Shirts</a>
        </h1>
      </div>
    </div>
  </>
)

export default FooterMenu
