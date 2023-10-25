function Greeting({name, children }) {
 
  return (
    <div className="greeting componentBox">
      {/* if props.name is truthy (not undefined), render it in a <p> tag, otherwise render nothing */}
      {name ? <p>Hello {name}</p> : <p>Hello world</p>}
      {children}
    </div>
  );
}
export default Greeting;
