import React from "react";

interface CTAButtonProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  href?: string;
  variant?: "solid" | "outline";
}

const CTAButton: React.FC<CTAButtonProps> = ({
  size = "md",
  children,
  onClick,
  type = "button",
  className = "",
  href,
  variant = "solid",
}) => {
  const sizeClass = size === "sm" ? "cta-btn-sm" : size === "lg" ? "" : "";
  const base = `cta-btn ${sizeClass} ${className}`;

  if (variant === "outline") {
    const outlineCls = `inline-flex items-center justify-center rounded-full border border-primary text-primary bg-transparent font-bold transition-all duration-300 cursor-pointer hover:bg-primary/10 ${
      size === "sm" ? "px-7 py-3 text-sm" : size === "lg" ? "px-10 py-4 text-base" : "px-7 py-3.5 text-sm"
    } ${className}`;
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={outlineCls}>
          {children}
        </a>
      );
    }
    return (
      <button type={type} onClick={onClick} className={outlineCls}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      <span>{children}</span>
    </button>
  );
};

export default CTAButton;
