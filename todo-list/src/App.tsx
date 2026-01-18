import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState<string[]>([])
  const [index, setIndex] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const storedList = localStorage.getItem('list')
    if (storedList) {
      setList(JSON.parse(storedList))
    }
  }, [])

  // Log list value on every render (or you can use another useEffect if you want to log only when list changes)
  console.log('value', list)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      if(index !== null){
        setList(list.map((item, i)=> i === index ? value : item))
        localStorage.setItem('list', JSON.stringify(list))
        setIndex(null)
      }
      else {
        setList([...list, value])
        localStorage.setItem('list', JSON.stringify([...list, value]))
       
      }
      setValue('')
    }

  }

  const deleteItem = (index: number) => {
    const newList = list.filter((_, i) => i !== index)
    setList(newList)
    localStorage.setItem('list', JSON.stringify(newList))
  }

  const editItem = (index: number) => {
    inputRef.current?.focus()
    setValue(list[index])
    setIndex(index)
  }

  return (
    <>
      <h1>Todo List</h1>
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        onKeyDown={(e)=>handleKeyDown(e)}
        style={{
          height: '50px',
          width: '100%',
          padding: '8px',
          marginBottom: '16px',
          boxSizing: 'border-box',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
        ref={inputRef}
        />
        {list.map((item, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '4px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            }}>
            <span>{item}</span>
            <span>
              <button
                onClick={()=>deleteItem(index)}
              >del</button>
              <button
                onClick={()=>editItem(index)}
              >edi</button>
            </span>
          </div>
        ))}
    </>
  )
}

export default App
