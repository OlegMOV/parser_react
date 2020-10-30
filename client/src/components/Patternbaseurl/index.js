import React, { useState, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { TextInput, DatePicker } from 'react-materialize'
import createPattern from './createPattern'
import './style.css'

export default function Patternbaseurl(props) {
  // document.title = 'Створення шаблону початкових сторінок'
  const [patterns, setPatterns] = useState({ mainpattern: '', rubrics: '' })
  function handleChange(valueX) {
    setPatterns({ ...patterns, [valueX.target.name]: valueX.target.value })
    props.onchange(valueX)
  }

  useEffect(() => {
    let datetest = document.getElementById("dateTest").value
    props.res({ pattern: createPattern(`${patterns.mainpattern}##${patterns.rubrics}`, new Date(datetest)) })
  }, [patterns])

  return (
    <div >
      <div className="row" id="firstline">
        <DatePicker
          label="Дата для тесту"
          id="dateTest"
          l='2'
          m='12'
          options={{ defaultDate: new Date(), setDefaultDate: true, format: 'yyyy-mm-dd' }}
        />
        <TextInput
          icon="email"
          l='10'
          m='12'
          id="TextInput-rubrics"
          label="Рубрики"
          name='rubrics'
          onChange={e => handleChange(e)}
        />
      </div>
      <div className="row">
        <TextInput
          icon="email"
          id="TextInput-patternmain"
          label="Шаблон для початкових сторінок"
          name="mainpattern"
          l='12'
          m='12'
          onChange={e => handleChange(e)}
        />
      </div>
    </div>
  )
}
