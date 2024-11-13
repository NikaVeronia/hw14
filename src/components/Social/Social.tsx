import  style from "./Social.module.css";
 const Social =()=>{
    return(
        <div className={style.social}> 
        <button className={style.facebookBtn}></button>
        <button className={style.twitBtn}></button>
        
        <button className={style.instBtn}></button>
     
    </div>
    );
};
export default Social