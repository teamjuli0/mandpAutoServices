import React from 'react'
import { Link } from 'react-scroll'

const FooterTopLinks = (props) => (
  <div className='col-sm-4' style={props.border}>
    {props.location ? (
      <Link
        to={props.location}
        smooth={true}
        duration={500}
        offset={props.offset}
        className='nav-link'
        style={{
          color: '#d6d9db',
          textDecoration: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          letterSpacing: '5px',
        }}
      >
        {props.name}
      </Link>
    ) : (
      <a
        className='nav-link'
        style={{
          color: '#d6d9db',
          textDecoration: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          letterSpacing: '5px',
        }}
        href={props.link}
      >
        {props.name}
      </a>
    )}
  </div>
)

export default FooterTopLinks
