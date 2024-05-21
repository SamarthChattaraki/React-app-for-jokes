import React, { useState} from 'react';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4'
import "./app.css"

function App1(props){
  
  const [searchTerm, setSearchTerm] = useState('');

  return (   
       <div class="body">
        
     <p>
      <App2 s1 ={searchTerm}/>
     </p>

    <p>
      <App3 s2={searchTerm}/>
    </p>
      
      <div class="style2">
      <h2>Search Jokes</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search jokes"
        />
      </div>
      <br/>
      <br/>
    <p>
      
     <App4/>
    
     </p>
    </div>
    
  );
};

export  default App1;
