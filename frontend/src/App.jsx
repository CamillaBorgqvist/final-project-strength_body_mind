import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from "./context/PrivatRoute"
import { Header } from "./components/Header"
import { About } from "./components/About"
import { Home } from "./components/Home"
import { SignIn } from "./components/SignIn"
import { SignUp } from "./components/SignUp"
import { WelcomeSignedIn } from "./components/WelcomeSignedIn"
import { WorkoutOverview } from "./components/WorkoutOverview"
import { WorkoutSelectionTabata } from "./components/workoutcomponents/WorkoutSelectionTabata"
import { WorkoutSelectionStretch } from './components/workoutcomponents/WorkoutSelectionStretch'
import { WorkoutSelectionGym } from './components/workoutcomponents/WorkoutSelectionGym';
import { WorkoutSpecific } from "./components/workoutcomponents/WorkoutSpecific"
import { WorkoutDetails } from "./components/workoutcomponents/WorkoutDetails"
import { AuthProvider } from "./context/AuthContext"
import { SaveWorkoutProvider } from './context/SaveWorkoutContext';
import { Footer } from './components/Footer';


export const App = () => {

  return (
    <AuthProvider>
      <SaveWorkoutProvider>
        <BrowserRouter>
          <main>
            <Header />
            <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/About" element={ <About />} />
              <Route path="/Signin" element={ <SignIn />} />
              <Route path="/Signup" element={ <SignUp />} />
              <Route path="/Welcomesignedin" element={ <PrivateRoute> <WelcomeSignedIn /> </PrivateRoute>} />
              <Route path="/Workoutoverview" element={ <WorkoutOverview />} />
              <Route path="/WorkoutselectionTabata" element={ <WorkoutSelectionTabata />} />
              <Route path="/WorkoutselectionGym" element={ <WorkoutSelectionGym /> } />
              <Route path="WorkoutselectionStretch" element= { <WorkoutSelectionStretch />} />
              <Route path="/Workoutspecific" element={ <PrivateRoute> <WorkoutSpecific /> </PrivateRoute>} />
              <Route path="/Workoutdetails" element={ <PrivateRoute><WorkoutDetails /> </PrivateRoute>} />
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      </SaveWorkoutProvider>
    </AuthProvider>
  )
}
