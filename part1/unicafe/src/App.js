import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give us feedback</h2>
      <Button action={"Good"} handleAction={() => setGood(good + 1)}></Button>
      <Button action={"Neutral"} handleAction={() => setNeutral(neutral + 1)}></Button>
      <Button action={"Bad"} handleAction={() => setBad(bad + 1)}></Button>
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  );
}

const Button = ({action, handleAction}) => {
  return (
    <button onClick={handleAction}>{action}</button>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if(good > 0 || bad > 0 || neutral > 0) {
    const total = good + bad + neutral;
    return (
      <table>
        <tbody>
          <StatisticLine name={"Good"} value={good}></StatisticLine>
          <StatisticLine name={"Neutral"} value={neutral}></StatisticLine>
          <StatisticLine name={"Bad"} value={bad}></StatisticLine>
          <StatisticLine name={"All"} value={total}></StatisticLine>
          <StatisticLine name={"Average"} value={(good*1 + bad*-1) / total}></StatisticLine>
          <StatisticLine name={"Positive"} value={((good*100) / total) + " %"}></StatisticLine>
        </tbody>
    </table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const StatisticLine = ({name, value}) =>  {
  return (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
  )
}

export default App;
