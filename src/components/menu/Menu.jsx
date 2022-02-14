import { useState } from 'react';
import Menulist from '../menulist/Menulist';
import './menu.scss'
import {vegMenu,nonvegMenu,sidesMenu,drinksMenu,} from "../../data"
import { useEffect } from 'react';

export default function Menu() {
  const [selected,setSelected] = useState('veg')
  const [data,setData] = useState([])
  const list = [
    {
      id: 'veg',
      title: 'VEG PIZZA',
    },
    {
      id: 'nonveg',
      title: 'NONVEG PIZZA',
    },
    {
      id: 'sides',
      title: 'SIDES',
    },
    {
      id: 'drinks',
      title: 'DRINKS',
    },
  ]

  useEffect(()=>{

    switch(selected){
      case 'veg':
        setData(vegMenu);
        break;
      case 'nonveg':
        setData(nonvegMenu);
        break;
      case 'sides':
        setData(sidesMenu);
        break;
      case 'drinks':
        setData(drinksMenu);
        break;
      default:
        setData(vegMenu);
    }

  },[selected])

  return(
      <div className="menu" id='menu'>
        <h1>Our Menu :</h1>
        <ul>
          {list.map(item=>(
            <Menulist title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
          ))}
        </ul>
        <div className="container">
          {data.map(d=>(
            <div className="items">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
         ))}
        </div>
      </div>
  );
}
