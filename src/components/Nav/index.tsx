import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Battom from "./Button/index";
import  style from "./style.module.css";
 const Nav =()=>{
    return(
        <nav className={style.container}>
          <Logo/>
           <Navbar/>
           <Battom/>
        </nav>
    );
 };
 export default Nav;