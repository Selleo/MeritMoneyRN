import React from 'react'

import { Consumer } from '../Context'

export default WrappedComponent => props => {
  const ConsumerHoc = <Consumer>{state => <WrappedComponent {...props} {...state} />}</Consumer>

  return ConsumerHoc
}
