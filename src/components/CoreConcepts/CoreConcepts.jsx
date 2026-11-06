import { CORE_CONCEPTS } from '../../data.js'
import componentsImg from '../../assets/components.png'
import Heading from '../Heading/Heading.jsx'
import Section from '../Section/Section.jsx'
import CoreConcept from '../CoreConcept/CoreConcept.jsx'

export default function CoreConcepts(props) {
  return (
    <>
      <Section id="core-concepts">
        <Heading HeadingContainer="h2">{props.title}</Heading>
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
      </Section>
    </>
  )
}