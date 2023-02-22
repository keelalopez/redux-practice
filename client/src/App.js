
import './App.css';
import CousinInput from "./features/cousins/CousinInput";
import Cousins from "./features/cousins/Cousins";

function App() {
  return (
    <div className="App">
      Add New Cousin 
      <CousinInput />
      <Cousins />
    </div>
  );
}

export default App;
