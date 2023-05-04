import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
    style={props?.style}
  >
    <path
      fill="#414141"
      d="M3.71 12.29A3.587 3.587 0 0 1 .135 8.712 3.587 3.587 0 0 1 3.71 5.137h3.078c0 2.355.08 4.828 0 7.152H3.71zm3.125 1.353c.061.593.18 1.18.367 1.742.283.848.738 1.68 1.407 2.285.13.117.18.28.146.45l-.298 1.497a.459.459 0 0 1-.286.346.456.456 0 0 1-.45-.052c-1.103-.767-1.908-1.894-2.434-3.118a10.411 10.411 0 0 1-.782-3.15h2.33zm1.308-8.665v7.442c3.805.828 6.97 3.1 9.993 4.985.366.228.826.084 1.18-.15.356-.235.55-.585.55-.993V1.237a1.16 1.16 0 0 0-.546-.99c-.353-.235-.785-.334-1.176-.155-2.746 1.255-6.243 3.899-10 4.886z"
    />
  </svg>
);

export default SvgComponent;
