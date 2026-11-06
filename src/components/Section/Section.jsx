export default function Section({title, children, ...props}) {
  return (
    <>
      <section {...props}>
        {title && <h2>{title}</h2>}
        {children}
      </section>
    </>
  )
}