import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
function Steps() {
  //default value of state variable is 1;
  //setStep is a function,to update the state variable
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //useState function is called hook in react,we can identity thses hooks can be identified easily because they begin with "use"
  //only call hooks on the top level of the function,not inside a function,if statement or any other
  //setState is executed asynchronously.That means the state update is not executed before the call stack is empty and before there is no task further ahead in the event queue. This is something internal to JavaScript and not React specific
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    //by clicking on the button,event handler is called and the step is being updated and the react rendered the new component view
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              //here in the onClick we are passing only the value that is hanldePrevious but we are not calling because ,when react sees the functioncall it directly calls it when the action is not performed yet
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
