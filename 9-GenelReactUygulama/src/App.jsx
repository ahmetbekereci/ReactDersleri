
import './App.css'
import Header from './Header.jsx';
import { courses } from './data.jsx';
import Course from './Course.jsx';



function App() {


  return (
    <div>
      <Header />
      <div className='courses'>
        {
          courses.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default App
