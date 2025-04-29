import './App.css'
import Baslik from './Baslik.jsx'
import Paragraf from './Paragraf.jsx'
import Resim from './Resim.jsx'
import Form from './Form.jsx'

function App() {

  return (
    <>
      <Baslik title="Merhaba React" />
      <Baslik title="React Props Örnek Uygulama" />

      <Paragraf yazi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap" />
      <Paragraf yazi="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin  " />

      <Resim resim="https://picsum.photos/200/300" />
      <Resim resim="https://picsum.photos/100/200" />
      <hr />
      <Form />

    </>
  )
}

export default App
