import useFetch from './Hooks/useFetch';
import './App.css';
import Card from './components/Card';

const url = "https://api.escuelajs.co/api/v1/products";

function App() {
  const {data, isLoading, error} = useFetch(url);

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
