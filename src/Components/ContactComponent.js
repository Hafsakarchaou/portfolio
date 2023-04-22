import React from 'react'
import { Card } from 'primereact/card';
import MobileIcon from './icons/MobileIcon';
import MapIcon from './icons/MapIcon';
import EnveloppeIcon from './icons/EnveloppeIcon';
import LinkedIcon from './icons/LinkedIcon';
import InstaIcon from './icons/InstaIcon';


import { Button } from 'primereact/button';
const ContactComponent = () => {
  return (
    <Card className='cardM'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div>
              <Card className='card6'>
                <div className='divIco'>
                  <MobileIcon className="mobile-icon" />
                </div>
                <h5 className='infos1'>
                  phone:&nbsp; +777897779 <br />
                  or:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+616542251
                </h5>
              </Card>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div>
              <Card className='card7'>
                <div className='divIco'>
                  <LinkedIcon />

                </div>
                <h5 className='infos2'>
                www.linkedin.com/in/hafsa-karchaou

                </h5>
              </Card>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div>
              <Card className='card8'>
                <div className='divIco'>
                  <EnveloppeIcon />
                </div>
                <h5 className='infos3'>
                  hafsadiy@gmail.com
                </h5>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </Card>
  )
}

export default ContactComponent