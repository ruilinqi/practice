/**
 * Create react app, create component including a form with one input to add any url and 
 * submit to display results on page.
https://pokeapi.co/api/v2/pokemon
https://rickandmortyapi.com/api/character

 */

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(url);
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      console.error(error);
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter a URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <pre>{response}</pre>
    </div>
  );
}

export default App;
