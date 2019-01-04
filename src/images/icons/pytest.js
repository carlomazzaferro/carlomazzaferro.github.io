import React from 'react'
import '../icons.less'
import { Icon } from 'antd'

export const Pytest = () => (

  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="28px" height="28px"
       viewBox="450 171 560 541">
    <g id="pytest_logo">
      <g id="graphics">
        <path
          d="M521.576,213.75 L952.616,213.75 C964.283,213.75 973.741,223.208 973.741,234.875 L973.741,234.875 C973.741,246.542 964.283,256 952.616,256 L521.576,256 C509.909,256 500.451,246.542 500.451,234.875 L500.451,234.875 C500.451,223.208 509.909,213.75 521.576,213.75 z"
          fill="#696969" id="horizontal_bar"/>
        <g id="top_bars">
          <path d="M525.333,171 L612,171 L612,191 L525.333,191 L525.333,171 z" fill="#009FE3"/>
          <path d="M638.667,171 L725.333,171 L725.333,191 L638.667,191 L638.667,171 z" fill="#C7D302"/>
          <path d="M750.5,171 L837.167,171 L837.167,191 L750.5,191 L750.5,171 z" fill="#F07E16"/>
          <path d="M861.861,171 L948.528,171 L948.528,191 L861.861,191 L861.861,171 z" fill="#DF2815"/>
        </g>
        <g id="bottom_bars">
          <path d="M861.861,278 L948.528,278 L948.528,424.5 L861.861,424.5 L861.861,278 z" fill="#DF2815"/>
          <path d="M750.5,278 L837.328,278 L837.328,516 L750.5,516 L750.5,278 z" fill="#F07E16"/>
          <path d="M638.667,278 L725.328,278 L725.328,634.5 L638.667,634.5 L638.667,278 z" fill="#C7D302"/>
          <path d="M525.333,278 L612,278 L612,712.5 L525.333,712.5 L525.333,278 z" fill="#009FE3"/>
        </g>
      </g>
    </g>
  </svg>

)

let PytestIcon
export default PytestIcon = props => (
  <Icon component={Pytest} {...props} />
)
