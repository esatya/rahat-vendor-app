import * as React from "react"
import Svg, { Defs, Pattern, Image, Path } from "react-native-svg"
function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={346}
      height={229}
      {...props}
    >
      <Defs>
        <Pattern
          id="prefix__a"
          width={1}
          height={1}
          viewBox="0 1.813 346 227.194"
        >
          <Image
            preserveAspectRatio="none"
            width={346}
            height={230.82}
          />
        </Pattern>
      </Defs>
      <Path
        data-name="PMT_M216_01 1"
        fill="url(#prefix__a)"
        d="M0 0h346v229H0z"
      />
    </Svg>
  )
}
export default SvgComponent