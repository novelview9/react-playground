import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { MyContext } from './context'

function ChildPortal() {
  const inputFormElement = document.getElementById('root2')
  const [container] = useState(document.createElement('div'))
  // const container = document.createElement('div')
  inputFormElement!.appendChild(container)

  const [state, setState] = useState(false)
  const onClick = () => {
    setState(!state)
  }

  // useEffect(() => {
  //   const inputFormElement = document.getElementById('root2')
  //   inputFormElement!.appendChild(container)
  // }, [])

  //   return (
  //     <div>
  //       <p>{String(state)}</p>
  //       <button onClick={onClick} type='button'>
  //         click
  //       </button>
  //       <input style={{ border: '1px' }} defaultValue='test' />
  //       <p>here is the value {String(value)}</p>
  //     </div>
  //     // container
  //   )
  return createPortal(
    <div className='border-2 border-red-500'>
      <p className='text-red-500'>here is portal</p>
      <p>here is potal input area</p>
      <input className='border-1 border-blue-50' defaultValue='sample text' />
      <p>portal state control</p>
      <button onClick={onClick} type='button'>
        flip button
      </button>
      <p>{String(state)}</p>
    </div>,
    container
  )
}

export default ChildPortal
