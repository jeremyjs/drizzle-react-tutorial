import React, { useState, useEffect } from 'react'
import { ReadString, SetString } from '../../components'
import logo from './logo.svg'
import './App.css'

export const App = (props) => {
  const { drizzle } = props

  // const state = { loading: true, drizzle_state: null }
  const [isLoading, setIsLoading] = useState(true)
  const [drizzleState, setDrizzleState] = useState(null)

  useEffect(() => {
    // subscribe to changes in the store
    const unsubscribe = drizzle.store.subscribe(() => {
  
      // every time the store updates, grab the state from drizzle
      const drizzle_state = drizzle.store.getState()
  
      // check to see if it's ready, if so, update local component state
      if (drizzle_state.drizzleStatus.initialized) {
        // this.setState({ loading: false, drizzle_state })
        setIsLoading(false)
        // console.log(drizzle_state)
        setDrizzleState(drizzle_state)
      }
    })

    return () => {
      unsubscribe()
    }
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Example app with Drizzle and React
        </p>
        
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          {isLoading ? 'Loading Drizzle...' : 'Drizzle is ready'}
        </a>
        
        <br />
        
        <ReadString
          isLoading={isLoading}
          drizzle={drizzle}
          drizzleState={drizzleState}
        />
        <SetString
          drizzle={drizzle}
          drizzleState={drizzleState}
        />
      </header>
    </div>
  )
}

export default App
