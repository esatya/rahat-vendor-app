import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m.224 11.288 1.313-1.125a7.243 7.243 0 0 1 0-2.323L.224 6.715a.644.644 0 0 1-.186-.707l.018-.052a8.92 8.92 0 0 1 1.598-2.77l.036-.043a.644.644 0 0 1 .703-.19l1.63.58A7.058 7.058 0 0 1 6.02 2.376L6.335.668a.644.644 0 0 1 .518-.516l.054-.01a9.033 9.033 0 0 1 3.186 0l.055.01a.642.642 0 0 1 .517.516l.316 1.716c.72.273 1.39.663 1.985 1.153l1.64-.585a.64.64 0 0 1 .704.191l.037.042a8.965 8.965 0 0 1 1.597 2.77l.018.053a.646.646 0 0 1-.186.707l-1.33 1.137a7.09 7.09 0 0 1 0 2.295l1.33 1.137a.644.644 0 0 1 .186.707l-.018.052a8.945 8.945 0 0 1-1.597 2.77l-.037.043a.644.644 0 0 1-.703.19l-1.641-.584a7.001 7.001 0 0 1-1.985 1.154l-.316 1.715a.645.645 0 0 1-.517.517l-.055.01a8.984 8.984 0 0 1-3.186 0l-.054-.01a.642.642 0 0 1-.518-.517l-.314-1.707a7.01 7.01 0 0 1-1.998-1.158l-1.63.58a.64.64 0 0 1-.703-.19l-.036-.042a8.968 8.968 0 0 1-1.598-2.77l-.018-.053a.642.642 0 0 1 .186-.703Zm2.736-3.21a5.699 5.699 0 0 0 0 1.852l.133.806-1.498 1.283c.227.524.514 1.02.854 1.479l1.86-.661.63.518a5.595 5.595 0 0 0 1.589.92l.763.288.36 1.949a7.547 7.547 0 0 0 1.703 0l.359-1.953.757-.292a5.606 5.606 0 0 0 1.577-.918l.63-.52 1.872.667c.34-.46.625-.956.854-1.479l-1.514-1.296.13-.803a5.552 5.552 0 0 0 0-1.828l-.13-.804 1.514-1.296a7.44 7.44 0 0 0-.854-1.479l-1.872.667-.63-.52a5.604 5.604 0 0 0-1.577-.918l-.76-.287L9.353 1.5a7.548 7.548 0 0 0-1.704 0L7.29 3.449l-.763.287a5.625 5.625 0 0 0-1.59.92l-.629.518-1.86-.66c-.34.46-.625.956-.854 1.478l1.498 1.284-.13.801Zm5.538-2.811a3.532 3.532 0 0 1 3.527 3.536 3.532 3.532 0 0 1-3.527 3.536 3.532 3.532 0 0 1-3.527-3.536 3.532 3.532 0 0 1 3.527-3.536Zm-1.587 5.127a2.237 2.237 0 0 0 3.174 0 2.242 2.242 0 0 0 .658-1.591 2.245 2.245 0 1 0-4.49 0c0 .6.235 1.165.658 1.59Z"
      fill="#303030"
    />
  </Svg>
)

export default SvgComponent