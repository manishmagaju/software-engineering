import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Images from './showimg.jsx'
import Paragraph from './paragraph.jsx'
// import Button from './button.jsx'
import Ticks from './ticks.jsx'
import Docs from './docs.jsx'
import Social from "./social.jsx"
import Spacer from './spacer.jsx'
import Button from './buttons.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Button text="click me" color="red"/>
        <Button text="enroll now" color="green" />
        


        {/* <Images />
        <Paragraph />
         <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
      </section>

      {/* <Ticks />

      <section id="next-steps">
        <Docs />
        <social />
      </section>

      <Ticks />
      <Spacer /> */}
      
    </>
  )
}

export default App
