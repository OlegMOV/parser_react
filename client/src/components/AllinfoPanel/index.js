import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { Icon, TextInput, Select, Switch } from 'react-materialize'
import './styles.css'

export default function Allinform(props) {
  return (
    <div className="allinfo">
      <TextInput
        icon={<Icon>contact_mail</Icon>}
        id="TextInput-nameIA"
        label="Назва ресурсу"
        onChange={props.onchange}
        s='4'
        m='4'
        l='3'
        xl='3'
        name="name"
      />
      <Select
        icon={<Icon>local_gas_station</Icon>}
        id="Select-owner"
        multiple={false}
        // label="Належність"
        noLayout={false}
        name="owner"
        onChange={props.onchange}
        value="0"
      >
        <option value="0">Україна</option>
        <option value="1">Росія</option>
        <option value="2">США</option>
        <option value="3">Польща</option>
      </Select>
      <Select
        icon={<Icon>language</Icon>}
        id="Select-lang"
        // label="Мова"
        multiple={false}
        name="lang"
        onChange={props.onchange}
        value="0"
      >
        <option value="ua">українська</option>
        <option value="ru">російська</option>
        <option value="en">англійська</option>
        <option value="pl">польська</option>
      </Select>
      <Select
        icon={<Icon>font_download</Icon>}
        id="Select-encoding"
        // label="Кодування"
        multiple={false}
        name="encoding"
        onChange={props.onchange}
        value="0"
      >
        <option value="utf-8">utf-8</option>
        <option value="cp-1251">cp-1251</option>
      </Select>
      <div className="input-field col">
        <Switch
          id="Switch-proxy"
          offLabel="Викл"
          onChange={props.onchange}
          onLabel="Вкл"
          name="proxy"
          node="botton"
        />
        <label htmlFor="Switch-proxy" className="active">Проксі-сервер</label>
      </div>


    </div >
  )
}
