import { useState } from 'react'
import './App.css'
import Card from './component/card/card'
import UseState from './component/UseState/UseState'


function App() {
  const [count, setCount] = useState(0)
 const data=[
  {"title": "Example 1", "views": 1000},
  {"title": "Example 2", "views": 1500},
  {"title": "Example 3", "views": 800},
  {"title": "Example 4", "views": 2000},
  {"title": "Example 5", "views": 200},
  {"title": "Example 6", "views": 100}
]

  return (
    
    <>
  
        <h1 className='text-center text-3xl font-semibold pt-20'>welcome To My Card Component</h1>
       <div className='w-[90%] mx-auto grid lg:grid-cols-3 grid-cols-2 gap-2 pt-10'>
       {
        data.map(item=><Card title={item.title} view={item.views}></Card>)
       }
       </div>

    <div className='w-[50%] mx-auto border-2 border-gray-400 rounded-lg p-24 mt-10'>
    <UseState></UseState>

    </div>
    </>
  )
}

export default App
