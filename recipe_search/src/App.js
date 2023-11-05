//  const Resipe_url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${dise}`
// this searching app will cover 
//hook, 
//commponents,
//asycn 
//funtion,
//map,
//props
import React, { useState, useEffect } from "react";


import "./App.css"
import Meal from "./pages/Meal";

const App = () => {
  const [dise,setSearchDise]=useState("")
  const [meals,setmeals]=useState([])
  useEffect(()=>{
    const Resipe_url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${dise}`
    fetch(Resipe_url)
    .then(res=>res.json())
    .then(data=>setmeals(data.meals))
  
  },[setSearchDise])

  return (
    <div className="app">
      <h1>Meal</h1>
          
           <div className="search">
        <input
          
          onChange={(e) => setSearchDise(e.target.value)}
          placeholder="Search for recipe"
        />
        <div>
        {
                    meals.map(meal=> <Meal key={meal.idMeal} meal={meal}></Meal>)
                }

        </div>
        </div>
    </div>
  );
};

export default App;