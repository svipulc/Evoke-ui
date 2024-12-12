/** @jsxImportSource @emotion/react */
import { CardContext, CardContextProvider } from "@/context/Card";
import { useEvokeTheme } from "@/hooks/theme";
import { CSSObject, SerializedStyles } from "@emotion/react";
import React, { ComponentProps, useContext } from "react";
import {
  cardContentStyle,
  cardFooterStyle,
  cardHeaderStyle,
  cardStyle,
  variantStyle,
} from "./index.style";

export type CardProps = ComponentProps<"div"> & {
  variant?: keyof ReturnType<typeof variantStyle>;
  css?: SerializedStyles | CSSObject;
};

export const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Content: React.FC<CardContentProps>;
  Footer: React.FC<CardFooterProps>;
} = ({ children, className, css, variant = "elevated", ...props }) => {
  const theme = useEvokeTheme();
  return (
    <CardContextProvider>
      <div
        aria-label="card"
        role="region"
        css={[cardStyle(theme, variant), css]}
        className={className}
        {...props}
      >
        {children}
      </div>
    </CardContextProvider>
  );
};

// Card Header Component
export type CardHeaderProps = ComponentProps<"div"> & {
  css?: SerializedStyles | CSSObject;
};

const CardHeader: React.FC<CardHeaderProps> = ({ children, className, css, ...props }) => {
  const theme = useEvokeTheme();
  const isInsideCard = useContext(CardContext);

  if (!isInsideCard) {
    console.error("Card.Header must be used within a Card component.");
    return null; // or throw an error depending on your preference
  }
  return (
    <div
      aria-label="card-header"
      css={[cardHeaderStyle(theme), css]}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Content Component
export type CardContentProps = ComponentProps<"div"> & {
  css?: SerializedStyles | CSSObject;
};

const CardContent: React.FC<CardContentProps> = ({ children, className, css, ...props }) => {
  const theme = useEvokeTheme();
  const isInsideCard = useContext(CardContext);

  if (!isInsideCard) {
    console.error("Card.Content must be used within a Card component.");
    return null; // or throw an error depending on your preference
  }
  return (
    <div
      aria-label="card-content"
      css={[cardContentStyle(theme), css]}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Footer Component
export type CardFooterProps = ComponentProps<"div"> & {
  css?: SerializedStyles | CSSObject;
};

const CardFooter: React.FC<CardFooterProps> = ({ children, className, css, ...props }) => {
  const theme = useEvokeTheme();
  const isInsideCard = useContext(CardContext);

  if (!isInsideCard) {
    console.error("Card.Footer must be used within a Card component.");
    return null; // or throw an error depending on your preference
  }
  return (
    <div
      aria-label="card-footer"
      css={[cardFooterStyle(theme), css]}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

// Assign subcomponents to Card
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
