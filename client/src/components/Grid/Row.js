import React from "react";

export const Row = ({ fluid, children }) => (
  <div style={{ padding: "20px" }} className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
