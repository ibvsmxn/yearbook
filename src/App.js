import './App.css';
import Tabs from "./components/Tabs"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <h1>Yearbook Technical Exercise</h1>
        </div>

      </header>

      <div>
      <Tabs> 
       <div label="Gator"> 
         See ya later, <em>Alligator</em>! 
       </div> 
       <div label="Croc"> 
         After 'while, <em>Crocodile</em>! 
       </div> 
       <div label="Sarcosuchus"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs> 
      </div>
    </div>
  );

  // For EACH page page, create a tab
  // Return details about each page inside individual page
}

export default App;
