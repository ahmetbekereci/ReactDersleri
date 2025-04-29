import './App.css'

function App() {

  const baslik = 'Kırtasiye Malzemeleri'
  let malzemeler = ['kalem', 'silgi', 'defter', 'kitap']

  const kontrol = true; //false
  let vize = 60;
  let final = 70;
  let ortalama = (vize * 0.4) + (final * 0.6);

  return (
    <>

      <div>
        <h1>merhaba REACT</h1>
        <button>tıkla</button>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius amet debitis dignissimos fugit distinctio, alias culpa sapiente excepturi dolores cumque?</p>
      </div>

      <div>
        <h2>{baslik}</h2>
        <ul>
          <li>{malzemeler[0]}</li>
          <li>{malzemeler[1]}</li>
          <li>{malzemeler[2]}</li>
          <li>{malzemeler[3]}</li>
        </ul>
        </div>
      <div>
        <h2>{baslik}</h2>
        <ul>
          {malzemeler.map((eleman, index) => {
            return (
              <li style={{backgroundColor:'orange', border:'1px solid black', width:'200px', color:'green'}} key={index}>{eleman}</li>
            )
          })}
          </ul>    
      </div>
        
      <div>
          {kontrol ? <p>şart sağlandı</p> : <p>Şart SAĞLANMADI</p>}
          {kontrol && <p>FENERBAHÇE</p>}
      </div>
<hr />
      <div className='notlar'>
        <h3>Öğrenci Geçip Kalma Durum</h3>
        <p>Vize Notu: {vize}</p>
        <p>Final Notu: {final}</p>
        <p>Ortalama: {ortalama}</p>
        {ortalama >= 50 ? <p>GEÇTİN, Hayırlı Olsun</p> : <p>KALDIN, Geçmiş Olsun</p>}
      </div>
        
    </>
  )
}
export default App



