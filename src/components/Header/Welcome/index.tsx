import BlockRight from "./blockRight/block-Right";
import BlockLeft from "./blockLeft/index";
import  style from "./style.module.css";
 const Welcom =()=>{
    return(
        <div className={style.container}>
         <BlockLeft/>
         <BlockRight/> 
        </div>
    );
 };
 export default Welcom;