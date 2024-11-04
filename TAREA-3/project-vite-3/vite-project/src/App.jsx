import Titulo from './Componets Titulo/Titulo'
import './App.css'
import Imagen from './Componets Imagen/Imagen'
import Details from './Componets Details/details'


function App() {
    return (
    <div className='titul' >
      <Titulo
        titulo={'Rick Sanchez'}/>
      
      <Imagen img='./rick.jpg.jpg'/>
    
      <Details
        genero={'Masculino'} 
        status={'Vivo'} 
      />
    </div>
  )
}

export default App