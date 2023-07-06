// Importing the CSS file for the App component
import './App.css';

// Importing the useState and useEffect hooks from the "react" library
import { useState, useEffect } from "react";

// Defining a functional component called Room
const Room = (props) => {
  return (
    <>
      {/* Displaying the size prop */}
      <h2>Size: {props.size}</h2>
      {/* Displaying the wall prop */}
      <h2>Wall: {props.wall}</h2>
      {/* Displaying a static value for the window */}
      <h2>Window: true</h2>
    </>
  )
}

// Defining the main App component
function App() {
  // Declaring some variables using the "const" keyword
  const myName = "John";
  const flag = true;

  // Using the useState hook to create a state variable named "counter"
  // and its corresponding setter function "setCounter", initialized with the value 10
  const [counter, setCounter] = useState(10);

  // Using the useEffect hook to perform side effects
  // The arrow function passed as the first argument will be executed after the component is rendered
  // The second argument, an empty array [], ensures that the effect is only executed once, similar to componentDidMount
  useEffect(() => {
    // Updating the value of "counter" to 50 using the "setCounter" function
    setCounter(50);
  }, []);

  // Returning the JSX (JavaScript XML) that represents the component's UI
  return (
    <div className="App">
      {/* Displaying a greeting with the value of myName variable */}
      <h1>Hello, {myName}</h1>
      {/* Using the ternary operator to conditionally display the value of myName or "Jane" */}
      <h1>If: {flag ? myName : "Jane"}</h1>
      {/* Displaying the result of an addition */}
      <h1>Add: {4 + 5}</h1>

      {/* To check if a name exists, we can render a React fragment, which appears as an empty div, inside the parentheses. */}
      {/* Using the ternary operator to conditionally render different elements */}
      {/* If flag is true, display myName */}
      {/* Otherwise, display "Man" and "Woman" */}
      {flag ? (
        <>
          <h1>{myName}</h1>
        </>
      ) : (
        <>
          <h1>Man</h1>
          <h1>Woman</h1>
        </>
      )}

      {/* Rendering the Room component with different props */}
      <Room size={50} wall="wooden" />
      <Room size={100} wall="leather" />

      {/* Displaying the counter state */}
      <h1>{counter}</h1>
      {/* Using the onClick event to decrement the counter by 1 */}
      <button onClick={() => setCounter((currentCount) => currentCount - 1)}>-</button>
      {/* Using the onClick event to increment the counter by 1 */}
      <button onClick={() => setCounter((currentCount) => currentCount + 1)}>+</button>
    </div>
  );
}

export default App;
