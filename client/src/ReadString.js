import React, { useState, useEffect } from 'react'

const ReadString = (props) => {
  const { isLoading, drizzle, drizzleState } = props
  const [dataKey, setDataKey] = useState(null)
  
  useEffect(() => {
    // TODO: why are these guards necessary?
    if (drizzle == null) {
      return
    }

    const contract = drizzle.contracts.StringStore

    // TODO: why are these guards necessary?
    if (contract == null) {
      return
    }

    setDataKey(contract.methods["stored_string"].cacheCall())
  })

  if (isLoading || drizzleState == null) {
    return (
      <div>
        Loading ReadString...
      </div>
    )
  }

  const { StringStore } = drizzleState.contracts
  const stored_string = StringStore.stored_string[dataKey]

  return (
    <div>
      Stored String: {stored_string && stored_string.value}
    </div>
  )
}

export default ReadString
