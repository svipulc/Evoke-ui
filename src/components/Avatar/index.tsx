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
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  src?: string;
  alt?: string;
};

type AvatarProps = CustomAvatarProps & VariantProps<typeof avatarStyles>;

export const Avatar: React.FC<AvatarProps> = ({
  children,
  isLoading,
  size,
  src,
  alt,
  ...props
}) => {
  if (src && children) {
    console.error("Please provide either 'src' or 'children', not both.");
    return null;
  }

  if (isLoading) {
    return <AvatarFallback size={size} />;
  }

  if (src && !isLoading && !checkUrlOrNot(src)) {
    return (
      <div
        className={cn(
          avatarStyles({ size }),
          `bg-silverSteel rounded-full text-${size} font-bold`
        )}
      >
        {getInitials(src)}
      </div>
    );
  }

  if (src && checkUrlOrNot(src) && !isLoading) {
    return (
      <AvatarImage
        src={src}
        size={size}
        alt={alt}
        className={cn(avatarImageStyle({ size }))}
      />
    );
  }

  return (
    <div className={cn(avatarStyles({ size }))} {...props}>
      {children}
    </div>
  );
};

// Avatar Image
type CustomAvatarImageProps = {
  src: string;
  size?: "sm" | "md" | "lg";
  alt?: string;
};

type AvatarImageProps = ComponentProps<"img"> &
  CustomAvatarImageProps &
  VariantProps<typeof avatarImageStyle>;

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  size = "md",
  alt,
  ...props
}: AvatarImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(avatarImageStyle({ size }))}
      {...props}
    />
  );
};

// Avatar Fallback
type CustomeAvatarFallbackProps = {
  size?: "sm" | "md" | "lg";
};

type AvatarFallbackProps = CustomeAvatarFallbackProps &
  VariantProps<typeof avatarFallbackStyle>;

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  size,
  ...props
}: AvatarFallbackProps) => {
  return <div className={cn(avatarFallbackStyle({ size }))} {...props}></div>;
};

// Function use in Avatar component

// Check if the input string is a valid URL
function checkUrlOrNot(src: string) {
  let userStatus = false;
  try {
    const checkUrl = new URL(src);
    if (checkUrl.protocol) {
      userStatus = true;
    }
  } catch (error) {
    userStatus = false;
  }
  // // Regular expression to match file paths (basic)
  const pathPattern =
    /^(?:[a-zA-Z]:)?(\/[^\/:*?"<>|\r\n]+)+\.(jpeg|jpg|gif|png|bmp|svg|webp|tiff|tif)$/i;

  // // Regular expression to match names (basic)
  const namePattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

  // Check if the input matches either pattern
  if (userStatus || pathPattern.test(src))
    return userStatus || pathPattern.test(src);
  if (namePattern.test(src)) return false;
}
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
