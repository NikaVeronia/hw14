import Welcom from "./Welcome";
import Ranstring from "./Runstring";
import Photoblock from "./Photoblock";
import  style from "./Header.module.css";
import React from 'react';
import { useTheme } from '../../ThemeContext';
const Header: React.FC  =()=>{
  const { theme, toggleTheme } = useTheme();
    return(
        <header className={style.container}>
          <Welcom/>
            <Ranstring/>
            <Photoblock/>
            <h1 className={style.h1}>Change thene</h1>
            <button onClick={toggleTheme} className={style.ThemeBtn}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>  
        </header>
    );
 };
 export default Header;