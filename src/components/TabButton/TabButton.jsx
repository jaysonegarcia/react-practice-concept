export default function TabButton(props) {
  // function handleClick() {
  //   console.log('hello world!')
  // }

  return (
    <>
      <li>
        <button className={props.isSelected === true ? 'active' : undefined} onClick={props.onSelect}>
          {props.children}
        </button>
      </li>
    </>
  )
}