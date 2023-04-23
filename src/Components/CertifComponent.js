import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';

import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const CertifComponent = () => {
    const items = [
        {
            header: 'Front-End Web Development with React Certification',
            Link: 'https://coursera.org/share/594e6dad3673e71e3bad64b75176ba77'
        },
        {
            header: 'Front-End Web UI Frameworks & Tools: Bootstrap Certification',
            subheader: 'Certification Subtitle 2',
            body: 'Certification description 2',
            link: 'https://coursera.org/share/2904f17e893fa182de055b12b7704327'
        },
        {
            header: 'Continuous Delivery & DevOps Certification',
            subheader: 'Certification Subtitle 3',
            body: 'Certification description 3',
            link: 'https://coursera.org/share/748583be0b10c9d14d04d32fdc41682c'
        },
        {
            header: 'Sales Force Basics Certification',
            subheader: 'Certification Subtitle 3',
            body: 'Certification description 3',
            link: 'https://coursera.org/share/166ef415b5d166f88b4d3fefcf5a6bda'
        },
        {
            header: 'Scrum Master Certification: Scrum Methodologies',
            subheader: 'Certification Subtitle 3',
            body: 'Certification description 3',
            link: 'https://coursera.org/share/6c8dc4d2c59fc0fa89a13c6c33e3f499'
        },
        {
            header: 'Effective Problem-Solving and Decision-Making Certification',
            subheader: 'Certification Subtitle 3',
            body: 'Certification description 3',
            link: 'https://coursera.org/share/a76111534bfd22d85f0ff633dff660b9'
        },
        {
            header: 'Honoris Entrepreneurial Skills Certificate',
            subheader: 'Certification Subtitle 3',
            body: 'Certification description 3',
            link: ''
        },
        {
            header: 'Honoris Social Skills  Certificate',
            subheader: 'Certification Subtitle 3',
            body: 'Certification description 3',
            link: ''
        },

    ];

    const itemTemplate = (item) => {
        return (
            <Card className='carouselCard'>

                <div > {/* align button to the right */}
                    <div className='titleDiv'>
                        <h3>{item.header}</h3>
                    </div>
                    <div className="btndiv">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <Button label="see certification" className='btn7' />
                        </a>
                    </div>
                </div>
            </Card>
        );
    };

    return (
        <Card className='cardM'>
            <div className="container">
                <Carousel className='carousel' value={items} itemTemplate={itemTemplate} numVisible={3} numScroll={1} 


responsiveOptions={[
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
]} />
            </div>
        </Card>
    );
};

export default CertifComponent