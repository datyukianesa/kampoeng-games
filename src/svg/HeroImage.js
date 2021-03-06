import * as React from "react"

function HeroImage({ props, className }) {
  return (
    <div className={className}>
      <svg
        id="logo_v2_svg__Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 600 600"
        xmlSpace="preserve"
        {...props}
      >
        <style>
          {
            ".logo_v2_svg__st1{fill:none;stroke:#000;stroke-width:11.2499;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.logo_v2_svg__st2{fill-rule:evenodd;clip-rule:evenodd}"
          }
        </style>
        <g id="logo_v2_svg__Layer_x0020_1">
          <g id="logo_v2_svg__Housa">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#fff"
              stroke="#000"
              strokeWidth={11.25}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M300 7.8h194.3l73.5 141.3h-65.5v267.7H378.8L359.4 283H240.6l-19.4 133.8H97.7V149.1H32.2L105.7 7.8z"
            />
            <path
              className="logo_v2_svg__st1"
              d="M450.2 149.1h50.6M97.7 149.1h50.6"
            />
          </g>
          <g id="logo_v2_svg__Move">
            <path
              className="logo_v2_svg__st1"
              d="M173.6 199.7v65.4M140.9 232.4h65.4"
            />
          </g>
          <path d="M134.5 441.3h-11.1l-21.9 27v-27h-8.9v53.5h8.9v-14.7l5-5.7 16.5 20.3h11.7l-22.2-26.3 22-27.1zm33.6 53.6h9.3L156.8 442l-20.5 52.9h9.3l2.2-5.9h18.1l2.2 5.9zm-11.3-33.3l6.4 18.4h-12.9l6.5-18.4zm84.5-20.3h-9.2L212.6 483l-20.3-41.6h-9.1v53.5h8.9v-33.5l16.3 33.5h8.5l15.3-32.8v32.8h8.9l.2-53.6zm29.7 0h-17.8v53.5h8.9v-22.3h8.9s17.8 0 17.8-15.6-17.8-15.6-17.8-15.6zm0 22.3h-8.9v-13.4h8.9s8.9 0 8.9 6.7-8.9 6.7-8.9 6.7zm50.6-23.1c-35 0-35 54.5 0 54.5 34.9-.1 34.8-54.5 0-54.5zm0 45.9c-23 0-22.9-37.2 0-37.2 23-.1 23 37.2 0 37.2zm71.3-36.1v-8.9h-35.7v53.5h35.7V486h-26.8v-13.4h22.3v-8.9h-22.3v-13.4h26.8zm53.6-9h-8.9v38.1l-26.7-38.1h-9v53.5h8.9v-38.1l26.7 38.1h9v-53.5zm37.2 22.3v8.9h13.4v7.7c-3.1 3.4-7.6 5.6-12.6 5.6-9.3 0-16.8-5.1-16.8-17.1 0-10.8 7.5-17.1 16.8-17.1 4.6 0 8.9 1.8 11.9 4.8l5.9-5.8c-4.5-4.5-10.8-7.2-17.8-7.2-13.9 0-25.2 10.7-25.2 25.3 0 16.1 10.6 25.3 24.1 25.3 6 0 10.2-1.4 14.3-5.1l.4 4.5h7.8v-29.7h-22.2v-.1zM153.5 543.9v13.4h14.9V569c-5.1 5.8-12.4 9.3-20.7 9.3-15.2 0-27.5-8.5-27.5-28.7 0-18.1 12.3-28.7 27.5-28.7 7.6 0 14.5 3.1 19.5 8l9.7-9.7c-7.4-7.6-17.7-12.2-29.1-12.2-22.8 0-41.3 17.9-41.3 42.5 0 27 17.3 42.5 39.5 42.5 9.8 0 16.8-2.4 23.5-8.6l.7 8h11.6v-47.6h-28.3zm88.4 46.2h14.9l-33-84-32.9 84h14.9l3.5-8.9h29l3.7 9.9-.1-1zm-18.2-49.5l10 28.7h-20.1l10.1-28.7zm132.1-32.3h-16L310.6 573l-30.4-64.7h-13.6v83.3H280v-52.2l24.5 52.2h15l23-51.1v51.1h13.4l-.1-83.3zm74.3 13.3v-13.4h-56.5V590h56.5v-13.4h-41.6v-20.8h34.2v-13.4h-34.2v-20.8h41.6zm36.3 70.2c13.3 0 25.7-8.5 25.7-24.3 0-9.8-4.7-18.2-13.5-22.2-5.9-2.7-11.7-2.7-12.3-2.7-6.1 0-12-3.7-12-10.5 0-7.7 5.5-11.4 12-11.4 6.3 0 11.6 3.1 11.8 9.9h13.7c-.2-14-11.2-23.7-25.5-23.7-13.3 0-25.8 9.6-25.8 25.3 0 9.8 4.8 17.1 13.5 21.1 6 2.7 11.7 2.7 12.4 2.7 5.5.2 12 4.6 12 11.6 0 6.5-5.7 10.5-12 10.5-6.1 0-11.8-3.4-12-10.3h-13.8c.2 15.4 11.5 23.7 25.8 24z" />
          <g id="logo_v2_svg__Buttons2">
            <circle
              className="logo_v2_svg__st2"
              cx={425.2}
              cy={205.8}
              r={15.3}
            />
            <circle
              className="logo_v2_svg__st2"
              cx={425.2}
              cy={258.9}
              r={15.3}
            />
            <circle
              className="logo_v2_svg__st2"
              cx={398.6}
              cy={232.4}
              r={15.3}
            />
            <circle
              className="logo_v2_svg__st2"
              cx={451.7}
              cy={232.4}
              r={15.3}
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default HeroImage
