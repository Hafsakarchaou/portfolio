import React from 'react'
import { Menubar } from 'primereact/menubar';


const items = [
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    url: '/'
  },
  {
    label: 'About me',
    icon: 'pi pi-fw pi-info',
    url: '/about'
  },
  {
    label: 'Parcours',
    icon: 'pi pi-bookmark',
    url: '/parcours'
  },
  {
    label: 'My projects',
    icon: 'pi pi-folder-open',
    url: '/projects'
  },
  {
    label: 'Contact',
    icon: 'pi pi-fw pi-envelope',
    url: '/contact'
  },
  
  {
    label: 'certifications',
    icon: 'pi pi-fw pi-file-pdf',
    url: '/certifications'
  }
];


const Header = () => {
  const start = (<h5>Hafsa Karchaou</h5>);
    
      const end = (
        <div className="navbar-icons">
          <i className="pi pi-search"></i>
          <i className="pi pi-bell"></i>
          <i className="pi pi-user"></i>
        </div>
      );
    return (
        <div>
            <Menubar  model={items} start={start} end={end} />
            
        </div>

        );
}

export default Header