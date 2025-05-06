import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('Ahmet')
  const [lastName, setLastName] = useState('Yılmaz')
  const [age, setAge] = useState(45)

  const [names, setNames] = useState([{ id: 1, name: 'Ahmet' }, { id: 2, name: 'Mehmet' }, { id: 3, name: 'Ali' }])

  const [userInfo, setUserInfo] = useState({ userName: 'AhmetB', password: '123456' })

  const [show, setShow] = useState(true)

  const handleChange = () => {
    setFirstName('Mehmet')
    setLastName('Demir')
    setAge(30)
  }

  return (
    <>
      <div className='container'>
        {firstName} {lastName} is {age} years old.
        <button onClick={handleChange}>Bilgileri Değiştir</button>

        <h2>İsim Listesi</h2>
        <ul>
          {names.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        <h2>Kullanıcı Bilgileri</h2>
        <p>Kullanıcı Adı: {userInfo.userName}</p>
        <p>Şifre: {userInfo.password}</p>
        <button onClick={() => setUserInfo({ ...userInfo, userName: 'MehmetB' })}>Kullanıcı Adını Değiştir</button>
        <button onClick={() => setUserInfo({ ...userInfo, password: '654321' })}>Şifreyi Değiştir</button>

        <h2>Show/Hide</h2>
        <p>{show ? <p>{userInfo.userName} - {userInfo.password} </p> : 'Görünmüyor'}</p>
      </div>




    </>
  )
}

export default App
