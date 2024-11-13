import './App.css'
import Nav from './components/Nav'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='container'> 
     <Nav/>
     <Header/>
     <Main />
     <Footer/>
  </div>   
  )
}
export default App;

