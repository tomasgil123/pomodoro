import React, { FC, useEffect } from 'react'

import MainLayout from 'src/layouts/main'

import Counter from 'src/components/counter'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const sendRequest = async (): Promise<void> => {
  const result = await (await fetch('https://jsonplaceholder.typicode.com/todos/2')).json()
  const result2 = await (await fetch('http://localhost:3000/api/hello')).json()
  console.log('result', result)
}

const Home: FC = () => {
  useEffect(() => {
    sendRequest()
  }, [])

  const onSendRequest = (): void => {
    sendRequest()
  }

  const onGetRequestFromCache = async (): Promise<void> => {
    const test1 = await caches.keys()
    const request = new Request('/api/hello')
    const test2 = await (await caches.match(request)).json()
    const test = await (await caches.match('https://jsonplaceholder.typicode.com/todos/2')).json()
    debugger

    caches
      .match('/todos/2')
      .then(function (response) {
        if (!response) throw Error('No data')
        return response.json()
      })
      .then(function (data) {
        // don't overwrite newer network data
        console.log('data', data)
      })
      .catch(function () {
        // we didn't get cached data, the network is our last hope:
        console.log('we didnt get cached data')
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  return (
    <div>
      Home
      <button onClick={onSendRequest}>Make request</button>
      <button onClick={onGetRequestFromCache}>Get request from cache</button>
      <Counter />
    </div>
  )
}

;(Home as PageWithLayout).layout = MainLayout

export default Home
