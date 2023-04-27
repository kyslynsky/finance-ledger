import * as React from "react";
import { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 9 19"
    {...props}
  >
    <path
      fill="#fff"
      d="m7.886 10.098-4.782 4.781a.84.84 0 0 1-1.192 0l-.794-.795a.84.84 0 0 1 0-1.191l3.389-3.39-3.389-3.389a.84.84 0 0 1 0-1.191l.791-.802a.84.84 0 0 1 1.192 0l4.781 4.781c.334.33.334.865.004 1.196Z"
    />
  </svg>
);
export default SvgArrow;
