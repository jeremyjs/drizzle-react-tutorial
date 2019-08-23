import React, { useEffect } from 'react'

const ReadString = (props) => {
  const { drizzle, drizzleState } = props
  
  useEffect(() => {
    console.log(drizzle)
    console.log(drizzleState)
  })
  
  return (
    <div>
      ReadString Component
    </div>
  )
}

export default ReadString
