import { useState } from 'react'
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton/TabButton.jsx'
import './App.css'



function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button')

  const testValue = test(false)

  const users = user;

  const logs = users.map((item) => ({
    name: item.name,
    age: item.age
  }));

  // console.log(logs);

  function handleSelect(selectedButton) {
    // console.log(selectedButton)
    setSelectedTopic(selectedButton);
    
  }
  
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {/* Manual data */}
              {/* <CoreConcept
                title="Components"
                description="The core UI building blocks"
                image={componentsImg}
              /> */}
              
              {/* Manual data from data.json file */}
              {/* <CoreConcept
                image={CORE_CONCEPTS[0].image}
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
              /> */}

              {/* Manual data shortcut from data.json file */}
              <CoreConcept {...CORE_CONCEPTS[0]} />
            </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
              </menu>
              {/* Dynamic Content */}
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic]?.title}</h3>
                <p>{EXAMPLES[selectedTopic]?.description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic]?.code}</code>
                </pre>
                {/* {selectedTopic} */}
              </div>
          </section>
          <p>{testValue}</p>
          <ul>
            {users.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </main>
      </div>
    </>
  )
}

export default App

const test = (state = true) => {
  let test = 'dsadad';
  if(state === false) {
    test = 'new';
  }

  return test;
}

const user = [
  {
    name: 'juan dela cruz',
    age: 29,
  },
  {
    name: 'kitten',
    age: 30,
  },
];
