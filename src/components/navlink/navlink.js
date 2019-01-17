import React from 'react'
import { Link } from '@reach/router'
//

export default (props) =>
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props

      return {
        style: {
          color: isCurrent ? "white" :"#46a789"
        }
      };
    }}
  />
