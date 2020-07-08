import React from 'react'
import { Link } from 'react-scroll'

const FooterTopLinks = (props) => (
  <div className='col-sm-4' id={props.border}>
    {props.location ? (
      <Link
        to={props.location}
        smooth={true}
        duration={500}
        offset={props.offset}
        className='nav-link footer-links'
      >
        {props.name}
      </Link>
    ) : (
      <a className='nav-link footer-links' href={props.link}>
        {props.name}
      </a>
    )}
  </div>
)

export default FooterTopLinks
