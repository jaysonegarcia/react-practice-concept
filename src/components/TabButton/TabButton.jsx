export default function TabButton(props) {
  // function handleClick() {
  //   console.log('hello world!')
  // }

  return (
    <>
      <li>
        <button onClick={props.onSelect}>{props.children}</button>
      </li>
    </>
  )
}