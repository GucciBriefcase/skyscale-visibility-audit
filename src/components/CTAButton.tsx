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

const sizes = {
  sm: "text-sm px-6 py-3",
  md: "text-sm px-7 py-3.5",
  lg: "text-base px-10 py-4",
};

const CTAButton: React.FC<CTAButtonProps> = ({
  size = "md",
  children,
  onClick,
  type = "button",
  className = "",
  href,
  variant = "solid",
}) => {
  const base = `font-semibold rounded-full transition-all duration-300 cursor-pointer ${sizes[size]} ${className}`;

  const variantCls =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:cta-glow hover:brightness-110"
      : "border border-primary text-primary bg-transparent hover:bg-primary/10";

  const cls = `${base} ${variantCls}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block ${cls}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

export default CTAButton;
