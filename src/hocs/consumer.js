import React from 'react'

import { Consumer } from '../Context'

export default WrappedComponent => props => {
  const ConsumerHoc = (
    <Consumer>
      {({ state, ...rest }) => <WrappedComponent {...props} {...state} {...rest} />}
    </Consumer>
  )

  return ConsumerHoc
}
