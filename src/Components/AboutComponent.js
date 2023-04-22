import React from 'react'
import { Card } from 'primereact/card';
import MyImg from '../Assets/MyImg.png';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';


const AboutComponent = () => {
  return (
    <Card className='cardM'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div>


              <div className='picDiv'>
                <img src={MyImg} alt="My Picture" className='pic img-fluid' />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div>
              <div className='infoDiv2'>
                <h5 className='titl1'>About me</h5>

                <p className='about'>
                  My name is Hafsa Karchaou, I am a software eengineering student in the fourth year at EMSI in Marrakech, I work on various projects and assignments to develop practical skills in software development. <br /> <br />
                  I have a strong passion for programming and technology, excellent problem-solving skills, and a desire to continuously learn and improve my skills.

                </p>
                <div>
                  <div className="row">
                  <div className="col-6 col-md-4">
                    <Link to="/projects">
                      <Button label="My projects" className='btnt  ' />
                    </Link>
                    </div>
                    <div className="col-6 col-md-4">
                    <Link to="/parcours">
                      <Button label="My journey" className='btns' />
                    </Link >
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AboutComponent