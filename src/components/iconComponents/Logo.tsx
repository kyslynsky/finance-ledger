import * as React from "react";
import { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 40 36"
    {...props}
  >
    <g clipPath="url(#logo_svg__a)">
      <path
        fill="#28A745"
        d="M37.002 2.69c-3.74.214-11.172.987-15.76 3.801-.318.194-.497.54-.497.9v24.874c0 .79.862 1.289 1.589.922 4.72-2.38 11.548-3.03 14.924-3.207 1.153-.06 2.049-.986 2.049-2.096V4.79c0-1.211-1.047-2.17-2.305-2.1ZM18.066 6.492c-4.588-2.814-12.021-3.587-15.76-3.8C1.047 2.62 0 3.579 0 4.79v23.095c0 1.11.896 2.035 2.049 2.096 3.377.177 10.208.827 14.93 3.21.724.365 1.583-.134 1.583-.921V7.379a1.03 1.03 0 0 0-.496-.888Z"
      />
    </g>
    <defs>
      <clipPath id="logo_svg__a">
        <path fill="#fff" d="M0 .5h39.308v35H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogo;
