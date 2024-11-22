/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const modalOverlayStyles = css`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  transition: opacity 300ms ease-in-out;
  z-index: 10;
  width: 100%;
`;

export const modalBodyBaseStyles = (size: "sm" | "md" | "lg" | "full") => css`
  background-color: white;
  color: black;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  max-height: full;
  margin: 1rem;

  ${size === "sm" &&
  `
  height:auto;
  width: 32rem;
    
`}
  ${size === "md" &&
  `
  height: auto;
  width: 48rem;
  
`}
${size === "lg" &&
  `
  height: auto;
  width: 72rem;
  
`}

${size === "full" &&
  `
  height: 100%;
  width: 100%;
  margin: 0rem;
  border-radius: 0;
`}

@media (max-width: 768px) {
    margin: 0.75rem;
    ${size === "full" &&
    `
      margin:0rem
    `}
  }
`;

export const modalHeaderStyles = css`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const modalContentStyles = (size: string) => css`
  overflow-y: auto;
  max-height: ${size === "full" ? "100%" : "calc(100vh - 10rem)"};
`;
