// Avatar Component

import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import {
  avatarFallbackStyle,
  avatarImageStyle,
  avatarStyles,
} from "./index.style";

// Avatar

type CustomAvatarProps = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

type AvatarProps = ComponentProps<"div"> &
  CustomAvatarProps &
  VariantProps<typeof avatarStyles>;

export const Avatar: React.FC<AvatarProps> = ({
  children,
  size,
  className,
  ...props
}) => {
  return (
    <div className={cn(avatarStyles({ size }), className)} {...props}>
      {children}
    </div>
  );
};

// Avatar Image

type CustomAvatarImageProps = {
  src: string;
  size?: "sm" | "md" | "lg";
  alt?: string;
  fallback?: React.ReactNode;
};

type AvatarImageProps = ComponentProps<"img"> &
  CustomAvatarImageProps &
  VariantProps<typeof avatarImageStyle>;

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  size = "md",
  alt = "Alternative Text",
  fallback,
  className,
  ...props
}) => {
  if (!src || src === "") {
    return <AvatarFallback size={size} alt={alt} fallback={fallback} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={cn(avatarImageStyle({ size }), className)}
      {...props}
    />
  );
};

// Avatar Fallback

type CustomAvatarFallbackProps = {
  size?: "sm" | "md" | "lg";
  alt?: string;
  fallback?: React.ReactNode;
};

type AvatarFallbackProps = ComponentProps<"div"> &
  CustomAvatarFallbackProps &
  VariantProps<typeof avatarFallbackStyle>;

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  size,
  alt,
  fallback,
  className,
  ...props
}) => {
  return (
    <div className={cn(avatarFallbackStyle({ size }), className)} {...props}>
      {fallback && fallback}
      {alt && !fallback && getInitials(alt)}
      {!alt && !fallback && "?"}
    </div>
  );
};

// Function use in Avatar component

// Extract initials from a full name
function getInitials(fullName: string): string {
  const nameParts = fullName.trim().split(/\s+/);
  const firstInitial = nameParts[0][0].toUpperCase();
  if (nameParts.length > 1) {
    const lastInitial = nameParts[nameParts.length - 1][0].toUpperCase();
    return `${firstInitial}${lastInitial}`; // Return initials for first and last name
  } else {
    return firstInitial; // Return only the first letter for a single name
  }
}
