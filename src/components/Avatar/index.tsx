// Avatar Component

import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import React, { ComponentProps, useEffect, useState } from "react";
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
  alt?: string;
  fallback?: React.ReactNode;
};

type AvatarImageProps = ComponentProps<"img"> &
  CustomAvatarImageProps &
  VariantProps<typeof avatarImageStyle>;

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  alt = "Alternative Text",
  fallback,
  className,
  ...props
}) => {
  const [isValidImage, setIsValidImage] = useState(false);

  useEffect(() => {
    console.log("AvatarImage useEffect");
    let isMounted = true;
    const validateSrc = async () => {
      if (src && src.trim() !== "") {
        const isValid = await validateImage(src);
        if (isMounted) {
          setIsValidImage(isValid);
        }
      } else {
        setIsValidImage(false);
      }
    };

    validateSrc();
    return () => {
      isMounted = false;
    };
  }, [src]);

  if (!isValidImage) {
    return <AvatarFallback alt={alt} fallback={fallback} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(avatarImageStyle({}), className)}
      {...props}
    />
  );
};

// Avatar Fallback

type CustomAvatarFallbackProps = {
  alt?: string;
  fallback?: React.ReactNode;
};

type AvatarFallbackProps = ComponentProps<"div"> &
  CustomAvatarFallbackProps &
  VariantProps<typeof avatarFallbackStyle>;

export const AvatarFallback: React.FC<AvatarFallbackProps> = React.memo(
  ({ alt, fallback, className, ...props }) => {
    const content = React.useMemo(() => {
      if (fallback) return fallback;
      if (alt) return getInitials(alt);
      return "?";
    }, [fallback, alt]);

    return (
      <div className={cn(avatarFallbackStyle({}), className)} {...props}>
        {content}
      </div>
    );
  }
);

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

// Validate image source
async function validateImage(source: string): Promise<boolean> {
  if (!source) return false;

  const isUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validUrl = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  const isImagePath = (path: string): boolean => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
    return imageExtensions.some((ext) => path.toLowerCase().endsWith(ext));
  };

  if (isUrl(source)) {
    try {
      return await validUrl(source);
    } catch (error) {
      console.error("Error validating image URL:", error);
      return false;
    }
  } else {
    return isImagePath(source);
  }
}
