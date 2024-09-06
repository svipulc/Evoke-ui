import React from "react";

export const CenterDecorator = (Story: React.FC) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Story />
  </div>
);
