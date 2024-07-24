// Avatar Component

import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";

// Avatar
const AvatarStyles = cva(
  [
    // css style
    "w-full",
    "h-full",
    "flex justify-center items-center",
  ],
  {
    variants: {
      variant: {
        // variant styles
      },
      size: {
        //size
        sm: "w-12 h-12",
        md: "w-14 h-14",
        lg: "w-16 h-16",
      },
    },
    compoundVariants: [
      // compound variants
    ],
    defaultVariants: {
      // default variants
    },
  }
);

type CustomAvatarProps = {
  children?: React.ReactNode;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  src?: string;
};

type AvatarProps = CustomAvatarProps & VariantProps<typeof AvatarStyles>;

export const Avatar = ({
  children,
  isLoading,
  size,
  src,
  ...props
}: AvatarProps) => {
  if (src && children) {
    console.error("Please provide either 'src' or 'children', not both.");
    return null;
  }

  return (
    <div
      className={cn(
        AvatarStyles({ size }),
        `${src && !checkUrlOrNot(src) && !isLoading ? `bg-silverSteel rounded-full text-${size} font-bold ` : src && checkUrlOrNot(src) && isLoading ? "animate-pulse" : ""}`
      )}
      {...props}
    >
      {isLoading ? (
        <Avatar.fallback size={size} />
      ) : src && checkUrlOrNot(src) ? (
        <Avatar.Image src={src} size={size} {...props} />
      ) : src && !checkUrlOrNot(src) ? (
        <>{src && getInitials(src)}</>
      ) : (
        children
      )}
    </div>
  );
};

// Avatar.Image
const AvatarImageStyle = cva(
  [
    // css style
    "w-full",
    "h-full",
    "rounded-full",
  ],
  {
    variants: {
      variant: {
        // variant styles
      },
      size: {
        //size
        sm: "w-12 h-12",
        md: "w-14 h-14",
        lg: "w-16 h-16",
      },
    },
    compoundVariants: [
      // compound variants
    ],
    defaultVariants: {
      // default variants
    },
  }
);

type CustomAvatarImageProps = {
  src?: string;
  size?: "sm" | "md" | "lg";
};

type AvatarImageProps = ComponentProps<"img"> &
  CustomAvatarImageProps &
  VariantProps<typeof AvatarImageStyle>;

Avatar.Image = ({ src, size, ...props }: AvatarImageProps) => {
  return (
    <img src={src} className={cn(AvatarImageStyle({ size }))} {...props} />
  );
};

// Avatar.Fallback
const AvatarFallbackStyle = cva(
  [
    // css style
    "w-full",
    "h-full",
    "rounded-full",
    "bg-silverSteel",
    "animate-pulse",
  ],
  {
    variants: {
      variant: {
        // variant styles
      },
      size: {
        //size
        sm: "w-12 h-12",
        md: "w-14 h-14",
        lg: "w-16 h-16",
      },
    },
    compoundVariants: [
      // compound variants
    ],
    defaultVariants: {
      // default variants
    },
  }
);

type CustomeAvatarFallbackProps = {
  size?: "sm" | "md" | "lg";
};

type AvatarFallbackProps = CustomeAvatarFallbackProps &
  VariantProps<typeof AvatarFallbackStyle>;

Avatar.fallback = ({ size, ...props }: AvatarFallbackProps) => {
  return <div className={cn(AvatarFallbackStyle({ size }))} {...props}></div>;
};

// Function use in Avatar component

// Check if the input string is a valid URL
function checkUrlOrNot(src: string) {
  return /^(http|https):\/\/[^ "]+$/.test(src);
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
