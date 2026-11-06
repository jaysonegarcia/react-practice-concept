export default function Heading({HeadingContainer = "h2", children, ...props}) {
  return (
    <>
      <HeadingContainer {...props}>
        {children}
      </HeadingContainer>
    </>
  )
}