import React from 'react';
import './menulist.scss'

export default function Menulist({id,title,active,setSelected}) {
  return(
      <li className={active ? 'menulist active' : 'menulist'} onClick={()=>setSelected(id)}>
          {title}
      </li>
  );
}
