/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import React from "react";

const progressBarWrapper = css`
  display: flex;
  align-items: center;
`;

const progressBarContainer = css`
  width: 90%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
`;

const progressFill = (value: number, color: string) => css`
  width: ${value}%;
  background-color: ${color};
  border-radius: 10px;
  height: 100%;
  transition: width 0.3s ease;
`;

const progressLabel = css`
  margin-left: 10px; /* Add margin between the progress bar and label */
  color: #6b6d6f;
  font-weight: bold;
  font-size: 14px;
`;

type ProgressBarProps = {
  value?: number;
  color?: string;
  className?: SerializedStyles;
  showLabel?: boolean;
};

export const Progress: React.FC<ProgressBarProps> = ({
  value = 50,
  color = "#4caf50",
  className,
  showLabel = true,
}) => {
  return (
    <div css={[progressBarWrapper, className]}>
      <div className="progress-container" css={progressBarContainer}>
        <div className="progress-fill" css={progressFill(value, color)} />
      </div>
      {showLabel && (
        <span className="progress-label" css={progressLabel}>
          {Math.round(value)}%
        </span>
      )}
    </div>
  );
};
