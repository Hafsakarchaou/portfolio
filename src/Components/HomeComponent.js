import React from 'react'
import { Card } from 'primereact/card';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Panel } from 'primereact/panel';
import MyImg from '../Assets/MyImg.png';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  return (


    <Card className='cardM'>
      <div className="container1">
        <div className="row">
          <div className="col-12 col-md-6">
            <div>

              <div className='infoDiv'>
                <h3 className='titl2'> Hello I am</h3>
                <h5 className='titl1'> Hafsa Karchaou </h5>
                <div>
                  <p className='intro'>

                    I am a software engineering student
                  </p>
                </div>
                  {/** p-button-outlined*/}
                <Link to="/about">
                  <Button label="more about me" className='btn1 ' />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div>

              <div className='picDiv'>
                <img src={MyImg} alt="My Picture" className='pic img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>




  )
}

export default HomeComponent