import { useState } from 'react';
import './App.css';

function GoalForm(props) {
  const [formData, setFormData] = useState({
    goal: "",
    by: ""
  })

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function submitHandler(e) {
      e.preventDefault()
      props.onAdd(formData)
      setFormData({
        goal: "",
        by: ""
      })
  }

  return (
    <>
      <h1>My Little Lemon Goal</h1>
      <div>
        <form onSubmit={submitHandler}>
          <input 
            type='text'
            name='goal'
            placeholder='Goal'
            value={formData.goal}
            onChange={changeHandler}
          />
          <input 
            type='text'
            name='by'
            placeholder='By...'
            value={formData.by}
            onChange={changeHandler}
          />
          <button type='submit'>Sumit Goal</button>
        </form>
      </div>
    </>
  )
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  )
}



function App() {
  const [allGoals, updateAllGoals] = useState([])

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal])
  }

  return (
    <div>
      <GoalForm onAdd={addGoal}/>
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}

export default App;
