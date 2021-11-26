import * as React from "react"
import Svg, { Defs, Pattern, Image, Path } from "react-native-svg"
function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={264}
      height={195}
      {...props}
    >
      <Defs>
        <Pattern
          id="prefix__a"
          width={1}
          height={1}
          patternTransform="matrix(-1 0 0 1 528 0)"
          viewBox="0 0.179 264 195"
        >
          <Image
            preserveAspectRatio="xMidYMid slice"
            width={264}
            height={195.357}
          />
        </Pattern>
      </Defs>
      <Path
        data-name="Recruitment Agency 1"
        fill="url(#prefix__a)"
        d="M0 0h264v195H0z"
      />
    </Svg>
  )
}
export default SvgComponent