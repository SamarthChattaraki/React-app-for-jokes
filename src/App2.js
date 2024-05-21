import React, {  useEffect,useState } from 'react';
import axios from 'axios';
import "./app.css"





 
function App2(props){
    const [apiJoke, setApiJoke] = useState('');

    useEffect(() => {
        const fetchJoke = () => {
    
          axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
              setApiJoke(response.data.value);
            })
            
        };
        fetchJoke();
      },[]);



      const filteredApiJoke = apiJoke && apiJoke.toLowerCase().includes(props.s1.toLowerCase());
    
    return(
        <div>
       <br/>
       <center>
       <table  border="" class="style5">

          <tr style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
            <th style={{ padding: '8px' }}><h1>Joke</h1></th>
          </tr>
        
          <tr style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
            <td style={{ padding: '8px',color:'green'}}>{filteredApiJoke ? apiJoke : 'No matching joke'}</td>
          </tr>

        </table>
        </center>
       
        </div>

    )
}

export default App2;