import React from 'react'
import './Page.css'
import Header from './Header'

const Section = () => {
  return (
    <div className='section-right'>
      <Header />
      <h3 className='sous-title'>Mes informations</h3>
      <div className='container-coordonnees'>
        <section className='coordonnees'>
          <ul>
            <li className='plus'>John Doe</li>
            <a href='#'>Changer mon nom</a>
            <li className='moins'>john@gmail.com</li>
            <a href='#'>Changer mon adresse email</a>
            <li className='moins'>+33 (0)7 55 50 63 90</li>
            <a href='#'>Changer mon numéro de contact</a>
            <li className='moins'>35 rue de la Bienfaisance <br />75008 Paris</li>
            <a href='#'>Changer mon adresse</a>
          </ul>
          {/*   <form className='my-form'>
            <label className='donnees' name='name' type='text'>John Doe</label>
            <input type='text' />
          </form> */}
        </section>
        <section className='contacts'>
          <ul>
            <li className='moins'>Modifier le nom du projet</li>
            <a href='#'>Nouveau nom du projet</a>
          </ul>
          <ul>
            <li className='moins'>Modifier ma liste de contacts</li>
          </ul>
          <ul>
            <li className='listes'><a href='#'>LindedIn</a></li>
            <li className='listes'><a href='#'>Facebook</a></li>
            <li className='listes'><a href='#'>Gamil</a></li>
            <li className='listes'><a href='#'>Yahoo</a></li>
            <li className='listes'><a href='#'>Hotmail</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Section
