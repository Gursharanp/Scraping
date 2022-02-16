import './App.css';
import axios from'axios'
import { useState } from 'react';
function App() {
  
  const[pin,setPin]=useState('');
  
  async function handlePin (){
     


  }

  return (
    <div >
      <div>

        <input />
      </div>
      <div>
        <button>
          pin
        </button>
      </div>
      <div>
        <button>refresh</button>
      </div>
    </div>
  );
}

export default App;
