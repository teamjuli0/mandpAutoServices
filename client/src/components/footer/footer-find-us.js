import React from 'react'

const FooterFindUs = (props) => (
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
            marginTop: '30px',
            width: '95px',
          }}
        />
        <h1
          style={{
            marginTop: '3px',
            fontSize: '20px',
            color: '#bbc0c4',
          }}
        >
          Contact Info
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '3px',
            width: '95px',
          }}
        />
        <h1
          style={{
            fontSize: '16px',
            padding: '5px 0',
          }}
        >
          (626)522-0251
        </h1>
        <h1
          style={{
            fontSize: '16px',
            // paddingBottom: '3px',
          }}
        >
          9824 Flair Dr. El Monte CA
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginTop: '25px',
            width: '60px',
          }}
        />
        <h1
          style={{
            marginTop: '3px',
            fontSize: '20px',
            color: '#bbc0c4',
          }}
        >
          Hours
        </h1>
        <div
          style={{
            border: '1px solid #616161',
            margin: 'auto',
            marginBottom: '3px',
            width: '60px',
          }}
        />
        <h1
          style={{
            fontSize: '16px',
            paddingTop: '10px',
            paddingBottom: '8px',
          }}
        >
          Monday: <span>8 AM - 5 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          Tuesday: <span>8 AM - 5 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          Wednesday: <span>8 AM - 5 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          Thursday: <span>8 AM - 5 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          Friday: <span>8 AM - 5 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          Saturday: <span>8 AM - 5 PM</span>
        </h1>
        <h1
          style={{
            fontSize: '16px',
            paddingBottom: '8px',
          }}
        >
          Sunday: <span>CLOSED</span>
        </h1>
      </div>
    </div>
  </>
)

export default FooterFindUs
