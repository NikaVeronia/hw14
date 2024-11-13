import  style from "./style.module.css";
const BlockLeft =()=>{
    return(
        <div className={style.container}>
            <div className={style.block}>
            <p>Stunning Photography by</p>
            <h1>Damien Braun</h1>
            </div>
            <div className={style.img}>
               <img src="/src/img/Abstract Design.png" alt="" />
            </div>
        </div>
        
    );
 };
 export default BlockLeft;