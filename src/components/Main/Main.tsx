import About from "./About/About";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Potfolio";
import  style from "./Main.module.css";
import FAQ from "./FAQ/FAQ";
const Main =()=>{
    return(
        <main className={style.container}>
          <About/>
          <Services/>
          <Portfolio/>
          <FAQ/>
          </main>
    );
 };
export default Main;
