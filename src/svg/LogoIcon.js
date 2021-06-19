import * as React from "react"

const LogoIcon = ({ props, className }) => {
  return (
    <div className={className}>
      <svg
        id="logo_v3_svg__Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 600 600"
        xmlSpace="preserve"
        {...props}
      >
        <style>
          {
            ".logo_v3_svg__st1{fill:none;stroke:#000;stroke-width:11.2499;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.logo_v3_svg__st2{fill-rule:evenodd;clip-rule:evenodd}"
          }
        </style>
        <g id="logo_v3_svg__Layer_x0020_1">
          <g id="logo_v3_svg__Housa">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#fff"
              stroke="#000"
              strokeWidth={11.25}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M300 79.3h209.7L589 231.8h-70.7v288.9H385l-20.9-144.4H235.9L215 520.7H81.7V231.8H11L90.3 79.3z"
            />
            <path
              className="logo_v3_svg__st1"
              d="M462.1 231.8h54.6M81.7 231.8h54.6"
            />
          </g>
          <g id="logo_v3_svg__Move">
            <path
              className="logo_v3_svg__st1"
              d="M163.6 286.4V357M128.3 321.7h70.6"
            />
          </g>
          <g id="logo_v3_svg__Buttons2">
            <circle className="logo_v3_svg__st2" cx={435.1} cy={293} r={16.5} />
            <circle
              className="logo_v3_svg__st2"
              cx={435.1}
              cy={350.3}
              r={16.5}
            />
            <circle
              className="logo_v3_svg__st2"
              cx={406.4}
              cy={321.7}
              r={16.5}
            />
            <circle
              className="logo_v3_svg__st2"
              cx={463.7}
              cy={321.7}
              r={16.5}
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LogoIcon
