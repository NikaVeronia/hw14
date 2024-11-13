import  style from "./style.module.css";
const Navbar=() =>{
    return(
        <div>
       <a href="" role="button" className={style.navbar}>Home</a> 
       <a href="" role="button" className={style.navbar}>About Me</a> 
       <a href="" role="button" className={style.navbar}>Portfolio</a> 
       <a href="" role="button" className={style.navbar}>Services</a> 
        </div>
    )
};
export default Navbar;