import Runstring from "../Header/Runstring";
import BlockRight from "../Header/Welcome/blockRight/block-Right";
import Social from "../Social/Social";
import style from "./Footer.module.css"
const Footer=()=>{
    return(
<div className={style.conteiner}>
    <div className={style.logo}></div>
    <Runstring/>
    <div className={style.conteinerFoot} >
        <div className={style.conteinerFootCol}>
        <p>A more meaningful home for photography</p>
       <BlockRight/>
       </div>
    <div className={style.footNav}>
      <div className={style.footRow}>
        <div className={style.footCol}>
            <h2>Home</h2>
            <p>About Me</p>
            <p>My Works</p>
            <p>Testimonials</p>
        </div>
        <div className={style.footCol}>
            <h2>Clients</h2>
            <p>Klovesto</p>
            <p>Nukeway</p>
            <p>Cloven’s</p>
            <p>MenVol</p>
        </div>
        <div className={style.footCol}>
            <h2>Portfolio</h2>
            <p>Events</p>
            <p>Portrait</p>
            <p>Branding</p>
            <p>Commerciale</p>
            <p>Wedding</p>
        </div>
        <div className={style.footCol}>
            <h2>Services</h2>
            <p>Portraits</p>
            <p>Events</p>
            <p>Commercial </p>
        </div>
        </div>  
    </div>
    </div>
    <hr />
    <br />
    <br />
    <div className={style.footDown}>
    <p>Terms & Conditions|Privacy Policy</p>
        <Social/>
        <p>© 2024 Damien Braun Photography. All rights reserved.</p>
    </div>
</div>
    );
};
export default Footer;