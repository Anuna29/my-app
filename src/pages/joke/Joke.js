import React, { useEffect, useState } from 'react'
import { Button } from "../../components"

export const Joke = () => {
  const [joke, setJoke] = useState("");

    const fetchJoke = async () => {
      try {
        const response = await fetch(
          `https://official-joke-api.appspot.com/random_joke`
        );
        const data = await response.json();
        setJoke(data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchJoke();
  }, []);

  return (
    <div><h2>Random Joke Generator</h2>
      <div>
        <p>{joke?.setup}</p>
        <p>{joke?.punchline}</p>
      </div>

      <Button onClick={fetchJoke}>Get Joke</Button>
    </div>
    
  )
}
