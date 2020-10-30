import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { Footer } from 'react-materialize'

export default function Navbar() {
  return (

    <Footer
      className="example"
      copyrights="2020 Створення парсера"
      links={
        <ul>
          <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
        </ul>}
      moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
    >
      <h5 className="white-text">
        Footer Content
      </h5>
      <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
      </p>
    </Footer>

  )
}