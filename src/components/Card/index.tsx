import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { cardContentStyle, cardFooterStyle, cardHeaderStyle, cardStyle } from "./index.style";

// Card Component
export type CardProps = ComponentProps<"div"> & VariantProps<typeof cardStyle>;

export const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Content: React.FC<CardContentProps>;
  Footer: React.FC<CardFooterProps>;
} = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn(cardStyle(), className)}>
      {children}
    </div>
  );
};

// Card Header Component
export type CardHeaderProps = ComponentProps<"div"> & VariantProps<typeof cardHeaderStyle>;

const CardHeader: React.FC<CardHeaderProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn(cardHeaderStyle(), className)}>
      {children}
    </div>
  );
};

// Card Content Component
export type CardContentProps = ComponentProps<"div"> & VariantProps<typeof cardContentStyle>;

const CardContent: React.FC<CardContentProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn(cardContentStyle(), className)}>
      {children}
    </div>
  );
};

// Card Footer Component
export type CardFooterProps = ComponentProps<"div"> & VariantProps<typeof cardFooterStyle>;

const CardFooter: React.FC<CardFooterProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn(cardFooterStyle(), className)}>
      {children}
    </div>
  );
};

// Assign subcomponents to Card
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
