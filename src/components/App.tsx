import React from 'react'
import './app.css'
import './index.scss'

interface props {
  name: string
  age: number
}

const App = (props: props) => {
  return (
    <>
      <div>build app webpack react-TS</div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>kaka</p>
    </>
  )
}

export default App
