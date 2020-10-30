import React, { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { TextInput, Select, Icon } from 'react-materialize'
import useKeypress from 'react-use-keypress'
import './style.css'

const list_link = [
  'http1', 'http2', 'http3'
]
const typeX = {
  alllinks: 'Усі посилання', titlepub: 'Заголовок',
  datetimepub: 'Час публікації', bodypub: 'Текст публікації', imagespub: 'Графічні матеріали'
}

export default function Xpathelement(props) {
  const [valueX, setValueX] = useState(Object.fromEntries(Object.entries(typeX).map(i => [i[0], ''])))
  const [typex, setTypex] = useState('alllinks')
  // document.title = 'Пошук посилань'

  const getData = async () => {
    return list_link.map(item => [true, item])
    // try {
    //     const res = await fetch('')
    //     const data = await res.json()
    //     return data
    // } catch (error) {
    //     console.log(error)
    // }
  }

  async function handleXpath() {
    props.res({ 'links': await getData() })
    console.log(valueX)
  }

  function handleChange(event) {
    setValueX({ ...valueX, [event.target.name]: event.target.value })
  }

  const clearValue = () => setValueX({ ...valueX, [typex]: '' })

  useKeypress('Enter', () => {
    handleXpath()
  })

  useKeypress('Escape', () => {
    clearValue()
  })

  return (
    <div id="fieldxpath">
      <div className="row">
        <Select
          icon={<Icon >local_gas_station</Icon>}
          // label='Категорія'
          id="Select-xpath"
          s='12'
          m='12'
          l='3'
          xl='2'
          multiple={false}
          noLayout={false}
          name="xpath"
          onChange={e => setTypex(e.target.value)}
          value={typex}
        >
          {Object.entries(typeX).map(([k, v]) => <option value={k}>{v}</option>)}
        </Select>
        <TextInput
          icon={<Icon className='cleaner'>local_gas_station</Icon>}
          name={typex}
          id="TextInput-xpath"
          label={typeX[typex]}
          s='12'
          m='12'
          l='9'
          xl='10'
          value={valueX[typex]}
          onChange={e => handleChange(e)}
          children={<i className="material-icons cleaner" onClick={clearValue}>close</i>}
        />
      </div>
    </div>
  )
}
