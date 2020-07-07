import React from 'react'
import { Link } from 'react-scroll'

const FooterTopLinks = (props) => (
  <div className='col-sm-3' style={props.border}>
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
    {/* <a
      href={props.link}
    >
    </a> */}
  </div>
)

export default FooterTopLinks
