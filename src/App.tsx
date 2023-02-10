import { useContext, useState } from 'react'
import { createContext } from 'vm'

import ChildPortal from './Child'
import { MyContext, MyProvider } from './context'

function App() {
  const [state, setState] = useState(true)

  return (
    <MyProvider>
      <div className='border-2 border-blue-500'>
        <p className='text-blue-500'>here is parent</p>
        <p>{String(state)}</p>
        <p>hello world</p>
        <button onClick={() => setState(!state)} type='button'>
          changed{' '}
        </button>
        <div>
          <p>context:</p>
        </div>
      </div>
      <ChildPortal />
    </MyProvider>
  )
}

export default App
