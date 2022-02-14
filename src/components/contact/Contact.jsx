import './contact.scss'
import { useState } from 'react';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(true)
  }

  return(
      <div className="contact" id='contact'>
        <div className="left">
          <img src="assets/nc.jpg" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' className='cinp'/>
            <textarea placeholder='Message' className='cmess'></textarea>
            <button type='submit' className='cbutt'>Send</button>
            {message && <span className='messa'>Thank You for Contacting.</span>}
          </form>
        </div>
      </div>
  );
}
