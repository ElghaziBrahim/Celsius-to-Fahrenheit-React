import { useState } from 'react'
import './App.css'

function App() {
  const [c, setC] = useState("")
  const [f, setF] = useState("")
  const [isError, setIsError] = useState(false)
  function ChangeToC(e) {
    let val = e.target.value
    setIsError(false)
    if (!isNaN(val)) {
      setF(val)
      setC(((val - 32) * (5 / 9)).toFixed(2))

    } else { setIsError(true) }

  }
  function ChangeToF(e) {
    setIsError(false)
    let val = e.target.value
    if (!isNaN((val))) {
      setC(val)
      setF(((val * 9 / 5) + 32).toFixed(2))
    } else { setIsError(true) }

  }

  return (
    <>
      <div className='main'>
        <h4>Convert  : Celsius - Fahrenheit</h4>
        {isError && <div className='error'> Error : Numbers Only</div>}

        <label className='c' >Celsius  </label>
        <input type="text" onChange={ChangeToF} value={c} className='inputC'
        />

        <label className='f' >Fahrenheit </label>
        <input type="text" onChange={ChangeToC} value={f} className='inputF'
        />
      </div>
    </>
  )
}

export default App
