import Header from './components/Header/Header.jsx'
import Section from './components/Section/Section.jsx'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx'
import Tabs from './components/Tabs/Tabs.jsx'
import './App.css'

function App() {
  const testValue = test(false)

  const users = user;

  const logs = users.map((item) => ({
    name: item.name,
    age: item.age
  }));

  // console.log(logs);

  return (
    <>
      <Header />
      <main>
        <CoreConcepts title="Core Concepts" />
        <Tabs title="Examples" />
        
        <Section id="test" title="Test">
          <p>{testValue}</p>
          <ul>
            {users.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </Section>
      </main>
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
