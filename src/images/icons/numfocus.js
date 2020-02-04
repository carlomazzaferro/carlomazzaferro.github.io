import React from 'react'
import '../icons.less'
import { Icon } from 'antd'

const NumFocus = () => (

  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
    height="28px"
    width="28px"
    viewBox="205.5 26.7 79 40.9"
    fontSize="40px"
  >
    <g>
      <g>
        <path fill="#008896" d="M283.5,47.2c0-21.2-17.2-38.5-38.5-38.5c-21.2,0-38.5,17.2-38.5,38.5c0,21.2,17.2,38.5,38.5,38.5
				C266.2,85.6,283.5,68.4,283.5,47.2z M213.1,47.2c0-17.6,14.3-31.9,31.9-31.9c17.6,0,31.9,14.3,31.9,31.9
				c0,17.6-14.3,31.9-31.9,31.9C227.4,79.1,213.1,64.8,213.1,47.2z"/>
      </g>
      <g>
        <path fill="#F1563F" d="M233.9,32.3c1.2,0,2.1-1,2.1-2.3c0-1.3-0.9-2.3-2.1-2.3h-7.3c-1.3,0-2.3,1-2.3,2.2v34.5c0,1.2,1,2.2,2.3,2.2
				h7.3c1.2,0,2.1-1,2.1-2.3c0-1.3-1-2.3-2.1-2.3h-4.9V32.3H233.9z"/>
      </g>
      <g>
        <path fill="#F1563F" d="M256.1,62c-1.2,0-2.2,1-2.2,2.3c0,1.3,1,2.3,2.2,2.3h7.3c1.3,0,2.3-1,2.3-2.2V29.9c0-1.2-1-2.2-2.3-2.2h-7.3
				c-1.2,0-2.2,1-2.2,2.3c0,1.3,1,2.3,2.2,2.3h4.9V62H256.1z"/>
      </g>

    </g>
  </svg>
)

let NumFocusIcon
export default NumFocusIcon = props => (
  <Icon component={NumFocus} {...props} />
)