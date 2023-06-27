
import Signup from "./pages/signup";
import './App.css';
import Signin from "./pages/Signin";

// const auth = getAuth(app);

function App() {
  
  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
