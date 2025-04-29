
import './App.css'
import Abutton from './Abutton' //Button componentini çağırdık
import Ybutton from './Ybutton' //Ybutton componentini çağırdık

function App() {
  return (
    <>
    {/* Oluşturulan Componenetlerin çağrılması */}
      <Abutton /> 
      <Abutton />
      <Abutton />
      <Abutton />
      <hr />
      <Ybutton title="Anasayfa" />
      <Ybutton title="İletişim" />
      <Ybutton title="Ürünler" />
      <Ybutton title="About" />
    
    </>
  )
}

export default App


