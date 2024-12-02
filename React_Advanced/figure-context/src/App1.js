import React from 'react'
import {useState} from "react"

function GoalForm(props){
    const [formData, setFormData ] = useState({goal: "", by: ""})
    
    function changeHandler(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function submitHandler(e){
        e.preventDefault()
        props.onAdd(formData)
        setFormData({goal: "", by: ""})
    }

    return (
        <>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="goal" name="goal" value={formData.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="by" value={formData.by} onChange={changeHandler} />

                <button type="submit">submit</button>
            </form>
        </>
    )
}

function ListofGoals(props){
    return (
        <ul>
            {props.allGoals.map((g, index) => (
                <li key={`${g.goal}-${g.by}-${index}`}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            ))}

        </ul>
    )
}

export default function App() {
    const [allGoals, updateAllGoals] = useState([])

    function addGoal(goal) {
        updateAllGoals([...allGoals, goal])
    }
    return (
        <div>
            <GoalForm onAdd={addGoal}  />
            <ListofGoals allGoals={allGoals} />
        </div>
    )
}
























