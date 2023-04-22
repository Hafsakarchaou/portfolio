import React from 'react'
import { Card } from 'primereact/card';

const ParcoursComponent = () => {
  return (
    <Card className='cardM'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div>
              <Card className='card5'>
              <button className="round-button1" >
                1
                </button>
                <h5 className='titl3'>LYCÉE MOHAMED VI OUARZAZATE 2016-2019</h5>
                <p className='details'>
                Baccalaureate in Mathematics, French option with honors</p>
              </Card>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div>
              <Card className='card5'>
              <button className="round-button1" >
                2
                </button>
              <h5 className='titl3'>FACULTÉ POLYDISCIPLINAIRE IBN ZOHR DE OUARZAZATE 2019-2022
</h5>
                <p className='details'>Professional license in IT and business management </p>
              </Card>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div>
              <Card className='card5'>
              <button className="round-button1" >
                3
                </button>
              <h5 className='titl3'>ÉCOLE MAROCAINE DES SCIENCES DE L'INGÉNIEUR (EMSI)</h5>
                <p className='details'>Engineer's degree in Computer Science and Networks MIAGE option (IT methods applied to business management) </p>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </Card>
  )
}

export default ParcoursComponent