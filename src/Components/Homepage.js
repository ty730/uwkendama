import React from 'react';
import '../App.css';
import ken from '../Images/ken.jpeg'
import logo from '../Images/uwkendamalogo.png'
import { FaInstagram } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

function Homepage() {

  return (
    <div className='Homepage'>
        <div className='top-image'>
            <img className='logo' src={logo} alt='logo' />
        </div>
        <div className='main-container'>
            <img className='left-image' src={ken} alt='kendama'/>
            <div className='content'>
              <h2 className='title'>Kendama Club at UW</h2>
              <p>
                  University of Washington X Kendama
              </p>
              <p>
                  Students + other kendama players in the area are welcome!
              </p>
              <p>
                  Contact us: uwkendama@uw.edu
              </p>
              <h2>Jams</h2>
              <p>
                Tuesdays 3:30-5:30 @ The Quad
              </p>
              <p>
                Saturdays 3:30-5:30 @ Denny Field
              </p>
              <h2>Kentei Testing</h2>
              <p>Kentei test at UW Kendama Club jams and level up!</p>
              <button onClick={() => window.open('https://kendamakentei.com/en/trick/index.html', '_blank')}>Trick List</button>
              <h2>Social Media</h2>
              <div className='social-container'>
                <a href='https://www.instagram.com/uwkendama/' target='_blank' rel='noreferrer'>
                  <FaInstagram size={60} />
                </a>
                <a href='https://discord.gg/cWd4ffzn' target='_blank' rel='noreferrer'>
                  <BsDiscord size={60} />
                </a>
              </div>
              
              <p></p>

            </div>
            <img className='right-image' src={ken} alt='kendama'/>
        </div>
        
    </div>
  );
}

export default Homepage;