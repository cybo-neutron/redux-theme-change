import React, { ReactNode } from "react";

function Button(props) {
  const {} = props;
  return (
    <button
      className={`bg-primary-600 px-5 py-1 font-bold text-secondary-700 dark:text-secondary-100 `}
      style={{
        clipPath: "polygon(10% 0%, 100% 0, 100% 75%, 90% 100%, 0 100%, 0% 25%)",
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
