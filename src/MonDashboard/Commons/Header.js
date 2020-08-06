import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Page.css'

const Header = () => {
  return (
    <div className='header'>
      <section className='infos-profile'>
        <h1 className='title'>Mon profile</h1>
      </section>
      <section className='infos-avatar'>
        <FontAwesomeIcon icon={faUserCircle} className='avatar' />
        <a href='#' className='swip-avatar'>Changer l'avatar</a>
        {/* <img src='#'  alt='avatar' /> */}
      </section>
    </div>
  )
}

export default Header
