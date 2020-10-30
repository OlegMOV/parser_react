import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { Checkbox } from 'react-materialize'

export default function Outputresault(props) {
  const lines = props.results
  let output = ''

  function setValue(e) {
    let res = lines.map(item => [item[1] === e.target.value ? !item[0] : item[0], item[1]])
    if (props.source === 'pattern')
      props.install({ pattern: res })
    else props.install({ links: res })
  }

  function ItemResult({ value }) {
    if (!value)
      return null
    if (value[1].startsWith('Не '))
      return <li>{value[1]}</li>
    const id = `ch_${value}`
    if (value[0])
      return <li><Checkbox checked id={id} label={value[1]} value={value[1]} onChange={setValue} /></li>
    return <li><Checkbox id={id} label={value[1]} value={value[1]} onChange={setValue} /></li>
  }


  if (lines && Array.isArray(lines)) {
    output = lines.map((line, index) => <ItemResult key={index} value={line} />)
  }

  return (
    <ol>
      {output}
    </ol>
  )
}
