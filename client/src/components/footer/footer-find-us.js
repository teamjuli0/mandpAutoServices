import React from 'react'

const FooterFindUs = props => (
  <>
    <div
      className={props.mobileDevice}
      style={
        props.mobileDevice
          ? {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px'
            }
          : {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px',
              width: '50vw'
            }
      }
    >
      <div
        style={{
          width: '90%',
          color: '#848d95',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '3px',
            width: '60px'
          }}
        />
        <h1
          style={{
            fontSize: '20px',
            color: '#bbc0c4'
          }}
        >
          Find Us
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '7px',
            width: '60px'
          }}
        />
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '5px',
            paddingTop: '5px'
          }}
        >
          Address
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '2px'
          }}
        >
          1909 South Vermont Avenue
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginTop: '30px',
            width: '60px'
          }}
        />
        <h1
          style={{
            marginTop: '3px',
            fontSize: '20px',
            color: '#bbc0c4'
          }}
        >
          Hours
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '3px',
            width: '60px'
          }}
        />
        <h1
          style={{
            fontSize: '16px',
            paddingTop: '10px',
            paddingBottom: '8px'
          }}
        >
          Monday: <span>10 AM - 7 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px'
          }}
        >
          Tuesday: <span>Closed</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px'
          }}
        >
          Wednesday: <span>10 AM - 7 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px'
          }}
        >
          Thursday: <span>10 AM - 7 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px'
          }}
        >
          Friday: <span>9 AM - 7 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px'
          }}
        >
          Saturday: <span>9 AM - 7 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px'
          }}
        >
          Sunday: <span>9 AM - 5 PM</span>
        </h1>{' '}
      </div>
    </div>
  </>
)

export default FooterFindUs
