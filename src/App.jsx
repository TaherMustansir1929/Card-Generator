import { useEffect, useState } from 'react'
import Card from './components/Card'

function App() {

  const apiData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
  }

  const [data, setData] = useState([])

  useEffect(() => {
    apiData().then(data => setData(data))

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="flex justify-between w-[1600px]">
          {data.map((card)=>{
            return (
              <Card key={card.id} title={card.title} description={card.body} />
            )
          })}
        </div>
      </div>
    )
  }, [])
}

export default App
