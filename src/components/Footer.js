import React from 'react'
import '../index.css';
import twittericon from '../Assets/icons8-twitterx-50.png';
import facebookicon from '../Assets/icons8-facebook-48.png';
import instagramicon from '../Assets/icons8-instagram-48.png';
import youtubeicon from '../Assets/icons8-youtube-48.png';
import chat from '../Assets/chatbot-Photo.png';
import threeoneone from '../Assets/311.png';
import mps from '../Assets/mps.png';
import imclogo from '../Assets/Emblem_of_IMC_Indore.jpg';

function Footer() {
  return (
<div class="Footer">

    <div class="footer-column"style={{ borderLeft: '4px solid #333', paddingLeft: '5px',textAlign: 'left',height: '200px'  }}>
          
          <ul>
            <h3>Contact</h3>
            <li>Phone: +91 7440440103</li>
            <li><a href="advpushyamitra@gmail.com">Email: advpushyamitra@gmail.com</a></li>
            <li>Phone: +91 7530220058</li>
            <li><a href="commindore@mpurban.gov.in">Email: commindore@mpurban.gov.in</a></li>

            <ul className="social-icons">
            <li>
              <a href="https://x.com/SwachhIndore" target="_blank">
                <img src={twittericon} alt="Twitter" width="24" height="24" style={{display: 'inline-flex'}} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/SwachhIndore" target="_blank">
                <img src={facebookicon} alt="Facebook" width="24" height="24" style={{display: 'inline-flex'}}/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/swachhindore/" target="_blank">
                <img src={instagramicon} alt="Instagram" width="24" height="24" style={{display: 'inline-flex'}}  />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@SwachhIndore" target="_blank">
                <img src={youtubeicon} alt="YouTube" width="24" height="24" style={{display: 'inline-flex'}}/>
              </a>
            </li>
          </ul>
          </ul>
        </div>
        <div class="footer-column"style={{ borderLeft: '4px solid #333', paddingLeft: '5px', height: '200px',lineHeight: '1.5' }} >
         
          <ul>
          <h3>Quick Links</h3>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Task Calendar</a></li>
            <li><a href="#">Leave Balance</a></li>
            <li><a href="#">Employee Training Portal</a></li>
          </ul>
        </div>
        <div class="footer-column" style={{marginTop: '310px', lineHeight: '2'}}>
       
          
          <ul>
          
            <li><a href="#">Home</a></li>
            <li><a href="#">Department</a></li>
            <li><a href="#">News and Events</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          </div>

          <div class="additional-icons" >
          <ul >
          
           <a href="#"> <img src={threeoneone} alt="311" width="24" height="24" /></a> 
          
           <a href="#"><img src={mps} alt="MPS" width="24" height="24" /></a> 
          
           <a href="#"><img src={imclogo} alt="IMC Logo" width="24" height="24" /></a>
          
        </ul>
        </div>
       
        

       
</div>
        
        
        
   

    
)
}

export default Footer

