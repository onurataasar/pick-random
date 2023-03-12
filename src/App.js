import "./styles.css";
import React from "react";
export default function App() {
  /*   const [jobs setJobs] = React.useState(["Duş Al", "Atomic Heart oyna", "Triangle of Sadness izle"])
   */
  const [random, setRandom] = React.useState(0);
  const [value, setValue] = React.useState();
  const [jobs, setJobs] = React.useState([]);
  const addChoice = (e) => {
    e.preventDefault();
    setJobs([...jobs, value]);
    setValue("");
  };
  const pickRandom = () => {
    const int = Math.random() * jobs.length;
    setRandom(Math.ceil(int));
  };

  const deleteChoice = (index) => {
    const newArr = jobs.filter((job) => jobs.indexOf(job) != index);
    setJobs(newArr);
  };

  const clearChoices = () => {
    setJobs([]);
  };

  return (
    <div className="container">
      <h1>P.I.C.K.</h1>
      <form onSubmit={addChoice} className="jobs-input">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Please input your choices"
        />
        <button type="submit">+</button>
      </form>
      <div className="choices">
        {jobs?.map((item, i) => (
          <div key={i} className="chip">
            {item}
            <button onClick={() => deleteChoice(i)} className="delete">
              X
            </button>
          </div>
        ))}
      </div>{" "}
      {jobs[0] && (
        <div className="pick">
          <span>{jobs[random - 1]}</span>
          <div className="buttons">
            <button className="pick-button" onClick={pickRandom}>
              Pick Random
            </button>

            <button className="clear-button" onClick={clearChoices}>
              Clear All Choices
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
