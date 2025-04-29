import './App.css'
import Card from './components/Card'

function App() {
   return (
    <>
      <div className='cards'>
        <Card resim="/img/resim1.jpg" yazi="Birinci Card İçin Yazı Birinci Card İçin Yazı Birinci Card İçin Yazı Birinci Card İçin Yazı" buton="Birinci" />
        <Card resim="/img/resim2.jpg" yazi="İkinci Card İçin Yazı İkinci Card İçin Yazı İkinci Card İçin Yazı İkinci Card İçin Yazı" buton="ikinci" />
        <Card resim="/img/resim3.jpg" yazi="Üçüncü Card İçin Yazı Üçüncü Card İçin Yazı Üçüncü Card İçin Yazı Üçüncü Card İçin Yazı" buton="Üçüncü" />
        <Card resim="/img/resim4.jpg" yazi="Dördüncü Card İçin Yazı Dördüncü Card İçin Yazı Dördüncü Card İçin Yazı Dördüncü Card İçin Yazı" buton="Dördüncü" />
      </div>
    </>
  )
}
export default App
