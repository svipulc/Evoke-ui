/** @jsxImportSource @emotion/react */
import React, { ComponentProps, useEffect, useState } from "react";
import {
  avatarFallbackStyle,
  avatarImageStyle,
  avatarStyles,
  shapeStyle,
  sizeStyle,
} from "./index.style";
import { CSSObject, SerializedStyles } from "@emotion/react";
import { useEvokeTheme } from "@/hooks/theme";
import { ResponsiveValue } from "@/theme/theme.type";

type BaseProps = {
  css?: SerializedStyles | CSSObject;
  className?: string;
};

export type AvatarProps = ComponentProps<"div"> &
  BaseProps & {
    size?: ResponsiveValue<keyof ReturnType<typeof sizeStyle>>;
    shape?: ResponsiveValue<keyof ReturnType<typeof shapeStyle>>;
  };

export type AvatarImageProps = ComponentProps<"img"> &
  BaseProps & {
    src?: string;
    alt?: string;
    fallback?: React.ReactNode;
  };

export type AvatarFallbackProps = ComponentProps<"div"> &
  BaseProps & {
    alt?: string;
    fallback?: React.ReactNode;
  };

export const Avatar: React.FC<AvatarProps> = React.memo(
  ({ children, size = "md", shape = "circular", className, css, ...props }) => {
    const theme = useEvokeTheme();

    return (
      <div
        aria-label="avatar"
        css={[avatarStyles(theme, size, shape), css]}
        className={className}
        {...props}
      >
        {children}
      </div>
    );
  }
);

// Avatar Image
export const AvatarImage: React.FC<AvatarImageProps> = React.memo(
  ({ src, alt = "Image", fallback, css, ...props }) => {
    const theme = useEvokeTheme();
    const [isValidImage, setIsValidImage] = useState(false);

    useEffect(() => {
      const controller = new AbortController();
      const validate = async () => {
        if (src?.trim()) {
          const isValid = await validateImage(src);
          if (!controller.signal.aborted) setIsValidImage(isValid);
        }
      };
      validate();

      return () => controller.abort();
    }, [src]);

    return isValidImage ? (
      <img src={src} alt={alt} css={[avatarImageStyle(theme), css]} {...props} />
    ) : (
      <AvatarFallback alt={alt} fallback={fallback} />
    );
  }
);

// Avatar Fallback
export const AvatarFallback: React.FC<AvatarFallbackProps> = React.memo(
  ({ alt, fallback, className, css, ...props }) => {
    const theme = useEvokeTheme();

    const fallbackContent = React.useMemo(() => {
      if (fallback) return fallback;
      if (alt) return getInitials(alt);
      return "?";
    }, [fallback, alt]);

    return (
      <div
        role="img"
        aria-label="avatar-fallback"
        css={[avatarFallbackStyle(theme), css]}
        className={className}
        {...props}
      >
        {fallbackContent}
      </div>
    );
  }
);

// Always set displayName explicitly for reusable or exported memoized components.
Avatar.displayName = "Avatar";
AvatarImage.displayName = "AvatarImage";
AvatarFallback.displayName = "AvatarFallback";

// Function use in Avatar component

// Extract initials from a full name
function getInitials(fullName: string): string {
  // Trim and split the fullName into parts
  const nameParts: string[] = fullName.trim().split(/\s+/);

  // Handle the case when no valid name parts are provided
  if (nameParts.length === 0) {
    return "";
  }

  // Extract initials for the first and last names
  const firstInitial = nameParts[0]?.charAt(0)?.toUpperCase() || "";
  const lastInitial =
    nameParts.length > 1 ? nameParts[nameParts.length - 1]?.charAt(0)?.toUpperCase() || "" : "";

  return `${firstInitial}${lastInitial}`;
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
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  const isImagePath = async (path: string): Promise<boolean> => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
    const isValid = await validUrl(path);
    return imageExtensions.some(ext => path.toLowerCase().endsWith(ext)) && isValid;
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
