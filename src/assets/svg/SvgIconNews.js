import * as React from "react"

const SvgIconNews = (props) => (
  <svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.46 3.103A2.927 2.927 0 0 0 15.546.406H2.924A2.927 2.927 0 0 0 0 3.33v11.343a2.927 2.927 0 0 0 2.924 2.924h14.152A2.927 2.927 0 0 0 20 14.673V5.677c0-1.112-.624-2.08-1.54-2.574Zm-1.573 11.57c0 .74-.602 1.34-1.341 1.34H2.924c-.74 0-1.34-.6-1.34-1.34V3.33c0-.74.6-1.34 1.34-1.34h12.622c.74 0 1.34.6 1.34 1.34v11.343Z"
      fill={props?.fill || "#414141"}
    />
    <path
      d="M7.45 3H3.526a.792.792 0 0 0 0 1.583h3.922A.792.792 0 0 0 7.45 3ZM7.45 5.64H3.526a.792.792 0 0 0 0 1.584h3.922a.792.792 0 0 0 0-1.583ZM7.45 8.281H3.526a.792.792 0 0 0 0 1.583h3.922a.792.792 0 0 0 0-1.583ZM15.526 3H9.274c-.262 0-.474.324-.474.724v9.752c0 .4.212.724.474.724h6.252c.262 0 .474-.324.474-.724V3.723c0-.4-.212-.724-.474-.724Z"
      fill={props?.fill || "#414141"}
    />
  </svg>
)

export default SvgIconNews