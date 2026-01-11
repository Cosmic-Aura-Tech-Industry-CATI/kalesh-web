import React from "react";

const GlassInput = React.memo(({ placeholder }) => {
  return (
    <input
      className="glass-input"
      placeholder={placeholder}
    />
  );
});

export default GlassInput;
