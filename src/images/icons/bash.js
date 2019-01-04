import React from 'react'
import { Icon } from 'antd'

const Sh = () => (

<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 60 60"
     height="28px"
     width="28px"
     >
    <path fill="#fffff" opacity="0.65" d="M51.209 51.21c5.827-5.878 8.791-12.931 8.791-21.21s-2.964-15.332-8.791-21.21c-5.877-5.826-12.93-8.79-21.209-8.79s-15.332 2.964-21.21 8.79c-5.826 5.878-8.79 12.931-8.79 21.21s2.964 15.332 8.79 21.21c5.878 5.877 12.931 8.79 21.21 8.79s15.332-2.913 21.209-8.79z"/>
    </svg>
)

let ShIcon
export default ShIcon = props => (
  <Icon component={Sh} {...props} />
)
