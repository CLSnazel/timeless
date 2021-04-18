import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import { Spinner } from 'evergreen-ui'
import Root from 'components/Root';

import 'theme/App.css'

export default function App () {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route component={Root} />
      </Switch>
    </Suspense>
  )
}
