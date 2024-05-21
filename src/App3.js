import React, { useState} from 'react';
import "./app.css"

function App3(props){
    
    const [localJokes, setLocalJokes] = useState([]);
    const [newJoke, setNewJoke] = useState('');
   
    const addLocalJoke = () => {
    if (newJoke!== '') {
      setLocalJokes([...localJokes, newJoke]);
      setNewJoke('');
    }
    };
   
  const filteredLocalJokes = localJokes.filter(joke =>
    joke.toLowerCase().includes(props.s2.toLowerCase())
   );




    return(
       <div>
        <div class="style2">
        <h2>Local joke</h2>
        <input
          type="text"
          value={newJoke}
          onChange={(event) => setNewJoke(event.target.value)}
          placeholder="Enter a local joke"
          
        />
        <br/>
        <br/>
        <button onClick={addLocalJoke} class="style4">Add Joke</button>
      </div>
      <br/>
       

      <div class="style2">   
        <h2>Local Jokes</h2>
        <table border="" class="style7">
          <tr style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
            <td style={{padding: '8px' }}>
           <ul>

              {filteredLocalJokes.length > 0 ? (
              filteredLocalJokes.map((joke,index) => (
            
               <li key={index}  style={{color:'green'}}>{joke}</li>
               
              ))
              ) : ( 
             <b>No matching local jokes</b>
              )}
           </ul>
           </td>
           </tr>
           
        </table>
      </div>
</div>

    )
};

export default App3;