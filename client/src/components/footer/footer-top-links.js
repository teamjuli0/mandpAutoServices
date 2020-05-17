import React from 'react'

const FooterTopLinks = props => (
  <div className='col-sm-3' style={props.border}>
    <a
      href={props.link}
      style={{
        color: '#d6d9db',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: '20px',
        letterSpacing: '5px'
      }}
    >
      {props.name}
    </a>
  </div>
)

export default FooterTopLinks
