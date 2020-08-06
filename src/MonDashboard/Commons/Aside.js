import React from 'react'
import './Page.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faColumns, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const AsideMenu = () => {
  return (
    <div className='aside'>
      <section className='section-identity'>
        <img src='https://cdn.clc2l.com/t/m/o/mozilla-firefox-SnLm0C.png' alt='logo de la société' className='logo' />
      </section>
      <section className='section-settings'>
        <ul>
          <li><FontAwesomeIcon icon={faCog} className='icons' /> settings</li>
          <li><FontAwesomeIcon icon={faColumns} className='icons' />mon dashboard</li>
          <li><FontAwesomeIcon icon={faSignOutAlt} className='icons' />logout</li>
        </ul>
      </section>
    </div>
  )
}

export default AsideMenu
