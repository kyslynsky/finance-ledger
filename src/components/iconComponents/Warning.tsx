import { SVGProps } from "react";
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 15"
    {...props}
  >
    <path
      fill="#EB5757"
      d="M13 11.04c0 .312-.107.55-.321.714a1.258 1.258 0 0 1-.789.246H1.11c-.312 0-.575-.084-.789-.252C.107 11.58 0 11.344 0 11.04c0-.24.07-.484.21-.732L5.595.66c.257-.44.56-.66.91-.66.351 0 .647.22.889.66l5.396 9.66c.14.256.21.496.21.72ZM7.312 4.908V3.156H5.688v1.752c0 .112.008.218.024.318.015.1.037.212.064.336.027.124.048.23.064.318l.304 1.944h.689l.315-1.944a7.18 7.18 0 0 1 .07-.312c.031-.128.055-.242.07-.342.016-.1.024-.206.024-.318Zm0 4.644a.8.8 0 0 0-.24-.588.787.787 0 0 0-.578-.24.774.774 0 0 0-.566.24.8.8 0 0 0-.24.588c0 .232.08.43.24.594.16.164.348.246.566.246a.777.777 0 0 0 .578-.246.82.82 0 0 0 .24-.594Z"
    />
  </svg>
);
export default SvgWarning;
