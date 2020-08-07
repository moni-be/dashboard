import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import HeaderInvest from './HeaderInvest'

import '../Page.css'


const SectionInvest = () => {
  return (
    <div className='section-right'>
      <HeaderInvest />
      <h3 className='sous-title-raiting'>RAITING Levée de fonds</h3>
      <div className='container-investissements'>
        <section className='top-investisseurs'>
          <button className='raiting'><FontAwesomeIcon icon={faLinkedin} className='social' />4000€</button>
          <button className='raiting'><FontAwesomeIcon icon={faFacebook} className='social' />3500€</button>
          <button className='raiting'><FontAwesomeIcon icon={faGoogle} className='social' />1200€</button>
        </section>
        <section className='liste-investisseurs'>
          <table className='tableau-invest'>
            <thead>
              <tr>
                <th colSpan='1'>Date</th>
                <th colSpan='1'>Source</th>
                <th colSpan='1'>Montant</th>
              </tr>
            </thead>
            <tr>
              <td>Août</td>
            </tr>
            <tr>
              <td>Août</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  )
}

export default SectionInvest
