import React, { useState } from 'react'

export const SetString = (props) => {
  const { drizzle, drizzleState } = props
  const [stackId, setStackId] = useState(null)

  if (!drizzleState) {
    return null
  }

  const { transactions, transactionStack } = drizzleState

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { // <Enter>
      event.preventDefault()
      setValue(event.target.value)
    }
  }

  const setValue = (value) => {
    const contract = drizzle.contracts.StringStore

    // let drizzle know we want to call the `set` method with `value`
    const stack_id = contract.methods['set'].cacheSend(value, {
      from: drizzleState.accounts[0]
    })

    // save the `stackId` for later reference
    setStackId(stack_id)
  }
  
  const getTxnStatus = () => {
    // get the transaction hash using our saved `stackId`
    const txn_hash = transactionStack[stackId]

    // if transaction hash does not exist, don't display anything
    if (!txn_hash) {
      return null
    }

    // otherwise, return the transaction status
    return `Transaction status: ${transactions[txn_hash] && transactions[txn_hash].status}`
  }

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
      <div>{getTxnStatus()}</div>
    </div>
  )
}

export default SetString
