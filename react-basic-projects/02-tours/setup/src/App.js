import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    let newArr = tours.filter((tour) => tour.id !== id);
    setTours(newArr);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  

  if (loading)
    return (
      <>
        <Loading />
      </>
    );
    if (tours.length == 0) {
      return (
        <main>
          <div className="title">
            <h1>No Tours Available</h1>
            <button onClick={() => fetchTours()}>Get Tours</button>
          </div>
        </main>
      );
    }
  else {
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  }

  
}

export default App;
