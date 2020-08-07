import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import '../Page.css'
import './PageInvest.css'

const HeaderInvest = () => {
  return (
    <div className='header-invest'>
      <section className='infos-invest'>
        <h1 className='title'>12000.00€</h1>
      </section>
      <section className='infos-avatar'>
        <FontAwesomeIcon icon={faUserCircle} className='avatar' />
      </section>
    </div>
  )
}

export default HeaderInvest
