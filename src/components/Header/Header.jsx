import heroImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescription = ['Fundamentals', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[getRandomInt(2)]
  return (
    <>
      <header>
        <img src={heroImg} alt="Hero" />
        <h1>React Essentials</h1>
        <p>{description} React concepts you will need for almost any app you are going to build!</p>
      </header>
    </>
  )
}