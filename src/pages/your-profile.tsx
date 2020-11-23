import React, { FC, useEffect } from 'react'

import MainLayout from 'src/layouts/main'

import Counter from 'src/components/counter'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Profile: FC = () => {
  return (
    <div>
      Profile
      <Counter />
    </div>
  )
}

;(Profile as PageWithLayout).layout = MainLayout

export default Profile
