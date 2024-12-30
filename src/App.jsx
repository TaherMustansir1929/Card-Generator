import { useEffect, useState } from 'react'
import Card from './components/Card'
import generateImage from './utils/generateImage';

function App() {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const apiData = await res.json()
    setData(apiData)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 pt-5">
      <div className="flex gap-5 justify-evenly flex-wrap">
        {data.map((card) => <Card key={card.id} title={card.title} description={card.body} image={generateImage()} />)}
      </div>
    </div>
  )
}

export default App
