import './App.css'
import Urunler from './Components/Urunler'
import database from './Components/database.json'

function App() {

  return (
    <div className='container'>

      {database.map((database) => (
        <Urunler database={database} key={database.id} />
      ))}

    </div>
  )
}

export default App
