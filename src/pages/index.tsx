import React, { FC, useEffect } from 'react'

import MainLayout from 'src/layouts/main'

import Counter from 'src/components/counter'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const sendRequest = async (): Promise<void> => {
  const result = await (await fetch('https://jsonplaceholder.typicode.com/todos/2')).json()
  console.log('result', result)
}

const Home: FC = () => {
  useEffect(() => {
    sendRequest()
  }, [])

  const onSendRequest = (): void => {
    sendRequest()
  }

  return (
    <div>
      Home
      <button onClick={onSendRequest}>Make request</button>
      <Counter />
    </div>
  )
}

;(Home as PageWithLayout).layout = MainLayout

export default Home
