
import Social from "../../Social/Social";
import  style from "./About.module.css";
 const About =()=>{
    return(
        <section className={style.about} id="about">
            <div className={style.nav_about}>
                <div className={style.text}>
                  <h6>ABOUT</h6>
                  <h2>I AM DAMIEN</h2>
                </div>
                <button className={style.know_more}>Know More</button> 
            </div>
            <hr />
            <br />
            <br />
            <div className={style.about_block}>
                <div className={style.img}>
                <picture>
                   <img src="/src/img/Image.png" alt="" />
                </picture>
                </div>
                <div className={style.about_container}>
                  <div className={style.introduction}><div><svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z" fill="#AFA1F7"/>
                      </svg>&nbsp;Introduction</div>
                      <p className={style.text_intr}>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time,
                         and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse 
                         and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
                   </div>
                   <div className={style.intr_contact}><div><svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z" fill="#AFA1F7"/>
                       </svg>&nbsp;Contact Information</div>
                       <div>
                       <address className={style.address}>
                        <div>  Email:&nbsp;<br />
                         <a href="mailto:jim@example.com">jim@example.com</a></div>
                         <div>Phone Namber:&nbsp;<br />
                         <a href="tel:+14155550132">+1 (415) 555‑0132</a></div>
                        </address>
                        <div className={style.contactInfo}>
                           <Social/>
                            <div className={style.contactInfo} >
                               
                              <button className={style.Contact}>Let’s Work</button>
                              <button className={style.Contact}>Download CV</button>
                            </div>
                        </div>
                       </div>
                   </div>
               </div>
            </div> 
        </section>
    );
 };
 export default About;