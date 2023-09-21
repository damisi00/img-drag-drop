import { useState, useEffect } from "react";
import Gallery from "../components/Gallery"
import Loader from "../components/Loader";


const Home = () => {
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  

  return (
    <>
      {loading ? 
      <Loader />
      :
      <main className="container">
        
        <Gallery />
      </main>
      }
    </>
  )
}

export default Home