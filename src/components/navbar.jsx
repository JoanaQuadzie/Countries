import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
    return (
   <>
       <nav>

       <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/Aboutpage'>ABOUT</Link></li>
          <li><Link to='/Countriespage'>COUNTRIES</Link></li>
          <li><Link to='/'>HELP</Link></li>
          <li><Link to='/Countrypage'>COUNTRY</Link></li>
          
        </ul>    
        </nav>

   </>
   
    );
}
