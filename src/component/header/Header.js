import React,{useState} from 'react'
import css from './header.module.css'
import Logo from '../../assets/logo.png'
import {BiShoppingBag} from 'react-icons/bi'
import {FaBars} from "react-icons/fa"
const Header = () => {
  const[showMenu,setShowMenu]=useState(false)

  const handleClick = ()=>{
    setShowMenu((showMenu)=>!showMenu)
  }
  return (
    <div className={css.container}>
    <div className={css.logo}>
<img src={Logo} alt='logo'/>
<span>amazon</span>
    </div>
  <div className={css.right}>
  <div className={css.bars} onClick={handleClick}>
    <FaBars/>
  </div>

        <ul className={css.menu} style={{display:showMenu?"inherit":"none"}}>
         <li>Collection</li>
         <li>Brands</li>
         <li>New</li>
         <li>Sales</li>
         <li>ENG</li>
       
        </ul>
    
    <input type='text' placeholder='search' className={css.search}/>
<BiShoppingBag className={css.cart}/>
  </div>
    </div>
  )
}

export default Header