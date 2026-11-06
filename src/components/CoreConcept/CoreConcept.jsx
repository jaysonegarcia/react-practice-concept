import './CoreConcept.css'

export default function CoreConcept(props) {
  return (
    <>
      <li>
        {props.image && <img src={props.image} alt={props.title} />}
        {props.title && <h3>{props.title}</h3>}
        {props.description && <p>{props.description}</p>}
      </li>
    </>
  )
}