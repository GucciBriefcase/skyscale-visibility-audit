import React from "react";

interface CTAButtonProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  href?: string;
}

const sizes = {
  sm: "text-sm px-[24px] py-[12px]",
  md: "text-sm px-[28px] py-[14px]",
  lg: "text-lg px-[44px] py-[18px]",
};

const CTAButton: React.FC<CTAButtonProps> = ({
  size = "md",
  children,
  onClick,
  type = "button",
  className = "",
  href,
}) => {
  const cls = `
    relative overflow-hidden font-syne font-bold
    border-[1.5px] border-[#00E5C8] rounded-full
    bg-transparent text-[#00E5C8] cursor-pointer
    transition-colors duration-350
    hover:text-[#080C0B]
    ${sizes[size]} ${className}
  `;

  const before = (
    <span
      className="absolute inset-0 bg-[#00E5C8] rounded-full origin-center scale-0 transition-transform duration-350 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-100 -z-0"
      aria-hidden="true"
    />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group inline-block ${cls}`}>
        {before}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${cls}`}>
      {before}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default CTAButton;
