import React, { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { Navbar, Tab, Tabs, Icon, NavItem, TextInput } from 'react-materialize'
import XpathPanel from './XpathPanel'
import Patternbaseurl from './Patternbaseurl'
import AllinfoPanel from './AllinfoPanel'

export default function Processor(props) {
  const [metadata, setMetadata] = useState({ name: '', owner: '0', lang: 'ua', encoding: 'utf-8', proxy: false, mainpattern: '' })
  const [xpaths, setXpaths] = useState({ titlepub: '', datetimepub: '', bodypub: '', imagespub: '', alllinks: '' })

  function handleChangeMeta(param) {
    setMetadata({ ...metadata, [param.target.name]: param.target.name === 'proxy' ? param.target.checked : param.target.value })
  }

  function handleChangeX(params) {
    setXpaths({ ...xpaths, [params.target.name]: params.target.value })
  }

  const option_ = { duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: true }

  return (
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo" href="#">Розробка парсера<Icon>build</Icon></a>}
      extendWith={
        <Tabs className="tabs-transparent z-depth-2 purple darken-4">
          <Tab active className="purple-text purple lighten-5"
            options={option_}
            title="Загальна інформація">
            <AllinfoPanel onchange={handleChangeMeta} />
          </Tab>
          <Tab className="purple-text purple lighten-5" options={option_} title="Початковий шаблон">
            <Patternbaseurl onchange={handleChangeMeta} res={props.resaults} />
          </Tab>
          <Tab className="white-text purple lighten-5" options={option_} title="Блок << XPath >>" >
            <XpathPanel onchange={handleChangeX} res={props.resaults} />
          </Tab>

        </Tabs >}
      id="mobile-nav"
      menuIcon={<Icon Icon > menu</Icon >}
      className="purple lighten-1"
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem onClick={function findParser() { }}>
        <div className="nav-wrapper">
          <form>
            <TextInput
              icon="search"
              id="TextInput-searchIA"
              s='4'
              l="4"
              xl='5'
              label="Пошук ресурсу у базі"
            />
          </form>
        </div>
      </NavItem>
      <NavItem href="#">
        Тестувати
      </NavItem>
      <NavItem onClick={function noRefCheck() { console.log('Send data to server', props.patterns.filter(item => item[0] === true), xpaths) }}>
        <Icon>save</Icon>
      </NavItem>
    </Navbar >
  )
}
