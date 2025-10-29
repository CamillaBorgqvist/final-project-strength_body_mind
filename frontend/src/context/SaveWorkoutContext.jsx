import { createContext, useContext, useState, useEffect } from "react";

const SaveWorkoutContext = createContext()

export const SaveWorkoutProvider = ({children}) => {
    const [savedWorkouts, setSavedWorkouts] = useState([])

    //get previous saved
    useEffect(() => {
        const storedWorkouts = localStorage.getItem("savedWorkouts")
        if (storedWorkouts) setSavedWorkouts(JSON.parse(storedWorkouts))
    }, [])

    //save new
    const saveWorkout = (workout) => {
        const exists = savedWorkouts.find(w => w.choice === workout.choice);
        if (!exists) {
            const updatedWorkouts = [...savedWorkouts, workout];
            setSavedWorkouts(updatedWorkouts);
            localStorage.setItem("savedWorkouts", JSON.stringify(updatedWorkouts))
        }
    };

    return (
        <SaveWorkoutContext.Provider value={{savedWorkouts, saveWorkout}}>
            {children}
        </SaveWorkoutContext.Provider>
    )
}

export const useSavedWorkout = () => useContext(SaveWorkoutContext)