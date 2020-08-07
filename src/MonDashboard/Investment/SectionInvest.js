import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import HeaderInvest from './HeaderInvest'

import '../Page.css'

const SectionInvest = () => {
  const handleClick = (e) => {
    e.preventDefault()
    alert('Ce CTA nous permettra d\'aller à la page de ce réseau ou campagne')
  }

  return (
    <div className='section-right'>
      <HeaderInvest />
      <div className='sous-title-raiting'>
        <h3>RAITING Levée de fonds</h3>
      </div>
      <div className='container-investissements'>
        <section className='top-investisseurs'>
          <button className='raiting' onClick={handleClick}><FontAwesomeIcon icon={faLinkedin} className='social' />4000€</button>
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
              <th colSpan='1' className='mois'>Août</th>
            </tr>
            <tr className='line'>
              <td>10/08/2020</td>
              <td>Facebook</td>
              <td>500€</td>
            </tr>
            <tr>
              <th colSpan='1' className='mois'>Juillet</th>
            </tr>
            <tr className='line'>
              <td>28/07/2020</td>
              <td>LinkedIn</td>
              <td>150€</td>
            </tr>
            <tr>
              <th colSpan='1' className='mois'>Juin</th>
            </tr>
            <tr className='line'>
              <td>15/06/2020</td>
              <td>LinkedIn</td>
              <td>300€</td>
            </tr>
            <tr className='line'>
              <td>33/06/2020</td>
              <td>Facebook</td>
              <td>200€</td>
            </tr>
            <tr>
              <th colSpan='1' className='mois'>Mai</th>
            </tr>
            <tr className='line'>
              <td>28/05/2020</td>
              <td>Gmail</td>
              <td>120€</td>
            </tr>
            <tr className='line'>
              <td>23/05/2020</td>
              <td>Gmail</td>
              <td>50€</td>
            </tr>
            <tr className='line'>
              <td>19/05/2020</td>
              <td>Hotmail</td>
              <td>350€</td>
            </tr>
            <tr className='line'>
              <td>16/05/2020</td>
              <td>Gmail</td>
              <td>50€</td>
            </tr>
            <tr className='line'>
              <td>5/05/2020</td>
              <td>Yahoo</td>
              <td>350€</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  )
}

export default SectionInvest
