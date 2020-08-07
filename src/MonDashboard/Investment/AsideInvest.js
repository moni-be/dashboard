import React from 'react'
import { Link } from 'react-router-dom'
import './PageInvest.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faColumns, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const AsideMenuInvest = () => {
  return (
    <div className='aside-invest'>
      <section className='section-identity'>
        <img src='https://cdn.clc2l.com/t/m/o/mozilla-firefox-SnLm0C.png' alt='logo de la société' className='logo' />
      </section>
      <section className='section-sociaux'>
        <h3>Réseau sociaux</h3>
        <ul>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Tweeter</li>
        </ul>
        <h3>Campagnes Emailing</h3>
        <ul>
          <li>Gmail</li>
          <li>Yahoo</li>
          <li>Hotmail</li>
        </ul>
      </section>
      <section className='section-settings'>
        <ul>
          <li><FontAwesomeIcon icon={faCog} className='icons' /> settings</li>
          <li><Link to='/' className='link'><FontAwesomeIcon icon={faColumns} className='icons' />mon profile</Link></li>
          <li><FontAwesomeIcon icon={faSignOutAlt} className='icons' />logout</li>
        </ul>
      </section>
    </div>
  )
}

export default AsideMenuInvest
