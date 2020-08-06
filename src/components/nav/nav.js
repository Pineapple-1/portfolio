import React ,{useState}from 'react';
import './nav.module.css'
import Links from './navitems/links/Links'
import Drawer from '../sideDrawer/sideDrawer'
import Backdrop from '../backdrop/backdrop'


const Nav = () =>{
    
    const [toggle,setToggle] = useState(false)
    return (   
    <header>
            <Links
            toggle={toggle}
            setToggle={setToggle}/>
            <Drawer toggle={toggle}/>
            <Backdrop
            toggle={toggle}
            setToggle={setToggle}/>
    </header>
    )
}
  
       

export default Nav
