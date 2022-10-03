import React, { useState } from 'react'

const NavItem = (x) => {
    const [Open, setOpen] = useState(false);
  return (
    <li className='NavItem' >
        <a href='#' className='NavItem_button' onClick={()=>setOpen(!Open)} >{x.item}</a>
        {Open&&x.children}
    </li>
  )
}

export default NavItem