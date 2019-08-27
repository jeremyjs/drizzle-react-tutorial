import React, { useState, useEffect } from 'react'

export const ReadString = (props) => {
  const { isLoading, drizzle, drizzleState } = props
  const [dataKey, setDataKey] = useState(null)
  
  useEffect(() => {
    const contract = drizzle.contracts.StringStore

    // TODO: why is this guard necessary?
    if (contract == null) {
      return
    }

    setDataKey(contract.methods['stored_string'].cacheCall())
  }, [drizzle, drizzle.contracts.StringStore]) // Empty array ensures that effect is only run on mount and unmount

  if (isLoading || drizzleState == null) {
    return null
    // (
    //   <div>
    //     Loading ReadString...
    //   </div>
    // )
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
