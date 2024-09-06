import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Lorem meu texto</h1>
        <p style={{ref: 'preload'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae natus, exercitationem hic sequi cum unde ullam rerum iusto est ratione voluptates id culpa in alias deleniti accusamus reprehenderit odit optio.</p>
        <picture>
            <source media="(min-width: 1440px)" srcSet="large.jpg" />
            <source media="(min-width: 1024px)" srcSet="medium.jpg" />
            <source media="(min-width: 768px)" srcSet="medium.jpg" />
            <img src="small.jpg" alt="" />
        </picture>
        {/* <img src="small.jpg" srcSet='small.jpg 376w, medium.jpg 700w, large.jpg 1024w'  sizes="(max-width: 600px) 90vw, (max-width: 900px) 70vw, 33vw" alt="" /> */}
      </div>
    </>
  )
}

export default App
