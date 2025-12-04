import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const SaveWorkoutContext = createContext()

export const SaveWorkoutProvider = ({children}) => {
    const {token} = useAuth();
    const [savedWorkouts, setSavedWorkouts] = useState([])

    //get previous saved workouts when login
    useEffect(() => {
        if (!token) {
            setSavedWorkouts([]);
            return;
        }    

        //get saved workouts from specific user
        fetch("http://localhost:8080/workouts", {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then((res) => res.json())
            .then((data) => setSavedWorkouts(data))
            .catch(() => {});
    }, [token]);

    //save new workout to backend
    const saveWorkout = async (workout) => {
        if (!token) return; 

        const response = await fetch("http://localhost:8080/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(workout)
        });

        const data = await response.json();
        if (data.success) {
            setSavedWorkouts((prev) => [...prev, data.workout]);
        }
    };    

    //delete saved workout to beckend
    const deleteWorkout = async (id) => {
        if (!token) return;

        const response = await fetch(`http://localhost:8080/workouts/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (data.success) {
            setSavedWorkouts((prev) => prev.filter((w) => w._id !== id));
        }
    };

    return (
        <SaveWorkoutContext.Provider value={{savedWorkouts, saveWorkout, deleteWorkout}}>
            {children}
        </SaveWorkoutContext.Provider>
    )
}

export const useSavedWorkout = () => useContext(SaveWorkoutContext)