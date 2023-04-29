import * as React from "react";
import { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 39 39"
    {...props}
  >
    <path
      fill="#fff"
      d="M4.333 38.458.542 34.667 15.708 19.5.542 4.333 4.333.542 19.5 15.708 34.666.542l3.792 3.791L23.292 19.5l15.166 15.167-3.791 3.791L19.5 23.292 4.333 38.458Z"
    />
  </svg>
);
export default SvgClose;
