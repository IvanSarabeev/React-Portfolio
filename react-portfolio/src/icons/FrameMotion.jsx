import * as React from "react";

function IconFramer(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" className="h-20 w-20" {...props}>
      <path fill="currentColor" fillOpacity={0.5} d="M12 21V9H6v6l6 6z" />
      <path fill="currentColor" d="M18 9V3H6l6 6H6v6h12l-6-6h6z" />
    </svg>
  );
}

export default IconFramer;
