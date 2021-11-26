import * as React from "react"
import Svg, { Defs, Pattern, Image, Path } from "react-native-svg"
function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={324}
      height={217}
      {...props}
    >
      <Defs>
        <Pattern
          id="prefix__a"
          width={1}
          height={1}
          viewBox="0.515 0 323.486 217"
        >
          <Image
            preserveAspectRatio="none"
            width={324.515}
            height={217}
          />
        </Pattern>
      </Defs>
      <Path
        data-name="HD_M280_03 1"
        fill="url(#prefix__a)"
        d="M0 0h324v217H0z"
      />
    </Svg>
  )
}
export default SvgComponent