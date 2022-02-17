import './App.css';
import Counter from './Components/Counter';


export default function App() {

  
  return (
    <div className="App"> 
    
        
        <Counter start={0} increase={1} decrease={1}/>
        <Counter start={150} increase={5} decrease={5}/>
        <Counter start={200} increase={10} decrease={10}/> 
    
      </div>

  );
    
}


// export default App;

