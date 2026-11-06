import { useState } from 'react'
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton/TabButton.jsx'
import './App.css'



function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)

  const testValue = test(false)

  const users = user;

  const logs = users.map((item) => ({
    name: item.name,
    age: item.age
  }));

  // console.log(logs);

  // Alternative dynamic content using if condition
  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic) {
    tabContent = (
      <div id="tab-content">
        {EXAMPLES[selectedTopic].title ? <h3>{EXAMPLES[selectedTopic].title}</h3> : null}
        {EXAMPLES[selectedTopic].description ? <p>{EXAMPLES[selectedTopic].description}</p> : null}
        {EXAMPLES[selectedTopic].code ? (
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        ) : null}
      </div>
    )
  }
  // End of Alternative dynamic content using if condition

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
              {/* <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} /> */}

              {/* For loop data from data.json file */}
              {CORE_CONCEPTS.map((item, index) => (
                <CoreConcept key={index} {...item} />
              ))}
            </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                {/* Manual Button Data */}
                {/* <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton> */}

                {/* For loop data from data.json file */}
                {Object.keys(EXAMPLES).map((key) => (
                  <TabButton
                    key={key}
                    isSelected={selectedTopic === key}
                    onSelect={() => handleSelect(key)}
                  >
                    {EXAMPLES[key].title}
                  </TabButton>
                ))}
              </menu>

              {/* Dynamic Content */}
              {!selectedTopic ? <p>Please select a topic.</p> : null}
              {selectedTopic ? (
                <div id="tab-content">
                  {EXAMPLES[selectedTopic].title ? <h3>{EXAMPLES[selectedTopic].title}</h3> : null}
                  {EXAMPLES[selectedTopic].description ? <p>{EXAMPLES[selectedTopic].description}</p> : null}
                  {EXAMPLES[selectedTopic].code ? (
                    <pre>
                      <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                  ) : null}
                </div>
              ) : null}

              {/* Alternative dynamic content using if condition */}
              {/* {tabContent} */}
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
