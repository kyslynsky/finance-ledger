import * as React from "react";
import { SVGProps } from "react";
const SvgIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#fff"
    viewBox="0 0 31 31"
    {...props}
  >
    <path d="M7.023 31V10.56H.666V31h6.357ZM3.811 7.826c2.05 0 3.691-1.709 3.691-3.76 0-1.982-1.64-3.623-3.691-3.623C1.828.443.188 2.084.188 4.066c0 2.051 1.64 3.76 3.623 3.76ZM30.744 31h.069V19.79c0-5.47-1.231-9.708-7.657-9.708-3.076 0-5.127 1.709-6.015 3.281h-.069V10.56h-6.084V31h6.358V20.883c0-2.666.478-5.195 3.76-5.195 3.28 0 3.35 3.007 3.35 5.4V31h6.288Z" />
  </svg>
);
export default SvgIn;
