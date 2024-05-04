import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  const handleContactUs = () => {
    // Replace 'YOUR_PHONE_NUMBER' with your actual phone number including country code
    const phoneNumber = '+923082464704';
    // Constructing the WhatsApp chat link
    const whatsappChatLink = `https://wa.me/${phoneNumber}`;
    // Opening the WhatsApp chat link in a new tab
    window.open(whatsappChatLink, '_blank');
  };
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to make your holiday beautiful.</p>
            </div>
            <button className='btn5'onClick={handleContactUs}>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Enjoy Your Holiday with KBHF</h2>
              <p>Receive updates, hot deals, and explore our content  on social media!</p>

              <div className='input'>
                <a href='https://www.facebook.com'>
                  <i className='fa-brands fa-facebook-f' style={{ marginRight: '20px' }}></i>
                </a>
                <a href='https://www.linkedin.com'>
                  <i className='fa-brands fa-linkedin' style={{ marginRight: '20px' }}></i>
                </a>
                <a href='https://twitter.com'>
                  <i className='fa-brands fa-twitter' style={{ marginRight: '20px' }}></i>
                </a>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 KBHF. Designd By Muhammad Awais.</span>
      </div>
    </>
  )
}

export default Footer
