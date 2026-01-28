import useFetch from './Hooks/useFetch'
import './App.css'
import Card from './components/Card';
// import { useEffect } from 'react';

const url = "https://api.escuelajs.co/api/v1/products";

function App() {
  const {data, isLoading, error} = useFetch(url);

  // useEffect(() => {
  //   console.log(data)
  // }, [data]);

  // const res = {
  //   id:11, 
  //   title:"hi theresdfsld lkdf jlaskdf jlkj ", 
  //   price:200, 
  //   description:"sdf dfkasjdf  skdjf laskd fjasd fsakj fsakjk ;sa fdksjf sjhd adf lakjf lkajdf jashf kajhfdoa",
  //   images: "https://imgs.search.brave.com/PXTsyOhsdUquXQdSkb4CvFhEoY3FoHWod3zUEIH-8k4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE0/OTUzMDk5My9waG90/by9kaWdpdGFsLWh1/bWFuLWhlYWQtY29u/Y2VwdC1mb3ItYWkt/bWV0YXZlcnNlLWFu/ZC1mYWNpYWwtcmVj/b2duaXRpb24tdGVj/aG5vbG9neS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SWR1/T1JKVXMxYzFzMG0y/U1hRQU5zSzhJVWh0/bHo4UUFwc0x4TllP/WXJYUT0"
  // }
  return (
    <>
    <header>
      <h1>Photos</h1>
    </header>
    <hr /><br />
    <section className="cards">
      {isLoading && <p>loading...</p>}

      {error && <p>error... {error}</p>}

      {!isLoading && !error && data &&
        data.map(item => (
          <Card key={item.id} item={item} />
        ))
      }
    </section>
    
    </>
  )
}

export default App
