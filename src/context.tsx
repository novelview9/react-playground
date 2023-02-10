/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react'

const MyContext = createContext<any>(null)
function MyProvider({ children }: any) {
  const [contextState, setContextState] = useState('')

  return (
    <MyContext.Provider value={{ contextState, setContextState }}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyProvider }
