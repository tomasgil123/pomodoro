import React, { FC } from 'react'

import MainLayout from 'src/layouts/main'

import Counter from 'src/components/counter'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Home: FC = () => {
  return (
    <div>
      Home
      <Counter />
    </div>
  )
}

;(Home as PageWithLayout).layout = MainLayout

export default Home
