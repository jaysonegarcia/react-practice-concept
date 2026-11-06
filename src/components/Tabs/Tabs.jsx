import { useState } from 'react'
import { EXAMPLES } from '../../data.js'
import Heading from '../Heading/Heading.jsx'
import Section from '../Section/Section.jsx'
import TabButton from '../TabButton/TabButton.jsx'

export default function ExamplesTabs(props) {
  const [selectedTopic, setSelectedTopic] = useState(null)

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
      <Section id="tabs">
        <Heading HeadingContainer="h2">{props.title}</Heading>
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
              onClick={() => handleSelect(key)}
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
      </Section>
    </>
  )
}