import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import AngularIcon from './icons/AngularIcon';

const ProjectsComponent = () => {
  return (
    <Card className='cardM'>
      <div className="container projectsCnt">
        <div className="row">
          <div className="col-6 md:col-6 lg:col-3">
            <div>
              <Card className='cardA'>
                {/*<Button className="round-button"  >*/}
                <h5 className='prTitle'>Leave management application</h5>
                <p className='techs'> Spring boot, MySQL, Angular</p>
              </Card>
            </div>
          </div>
          <div className="col-6 md:col-6 lg:col-3">
            <div>
              <Card className='cardA'>
                <h5 className='prTitle'>Online site for sale and purchase</h5>
                <p className='techs'>Django</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="row rows">
          <div className="col-6 md:col-6 lg:col-3">
            <div>
              <Card className='cardA'>
                <h5 className='prTitle'> veterinary management desktop application</h5>
                <p className='techs'>c sharp </p>
              </Card>
            </div>
          </div>
          <div className="col-6 md:col-6 lg:col-3">
            <div>
              <Card className='cardA'>
                <h5 className='prTitle'>Hotel management desktop application</h5>
                <p className='techs'>Java, Java Swing, MySQL</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="row rows">
          <div className="col-6 md:col-6 lg:col-3">
            <div>
              <Card className='cardA'>
              <h5 className='prTitle'> tic tac toe game</h5>
                <p className='techs'>React, css</p>
              </Card>
            </div>
          </div>
          <div className="col-6 md:col-6 lg:col-3">
            <div>
              <Card className='cardA'>
                <h5 className='prTitle'> Pokédex mobile app with online api</h5>
                <p className='techs'>Java, Android</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Card>

  )
}

export default ProjectsComponent