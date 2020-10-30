import React, { useState } from 'react'
import Outputresault from './components/Outputresault'
import Processor from './components/processor'
// import { Collapsible, CollapsibleItem, Icon } from 'materialize-css'

function App() {
  const [output, setOutput] = useState({ pattern: [], links: [], title: '' })
  document.title = 'Розробка парсера'

  function handleResults(res) {
    // console.log(res)
    setOutput({ ...output, ...res })
  }


  return (
    <div className="App">
      <Processor resaults={handleResults} patterns={output.pattern} />

      <div className="container center-left">
        <h3>Список початкових сторінок</h3>
        <Outputresault results={output.pattern} source="pattern" install={handleResults} />
        <h3>Список посилань</h3>
        <Outputresault results={output.links} source="links" install={handleResults} />
      </div>
    </div>
  );
}

export default App;
