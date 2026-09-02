interface BrandMarkProps {
  className?: string;
  size?: number;
}

export function BrandMark({ className = "h-8 w-8", size = 32 }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Circle Ring */}
      <circle
        cx="18"
        cy="18"
        r="17"
        className="stroke-primary"
        strokeWidth="2"
        strokeDasharray="2 1"
      />
      
      {/* Parachute Canopy Arc */}
      <path
        d="M6 16C6 9.37258 11.3726 4 18 4C24.6274 4 30 9.37258 30 16H6Z"
        className="fill-primary"
      />

      {/* Parachute Canopy Center Section in Secondary Accent */}
      <path
        d="M14 16C14 10 16 5 18 4C20 5 22 10 22 16H14Z"
        className="fill-secondary"
      />

      {/* Rig Lines */}
      <path
        d="M7 16L18 29M12 16L18 29M24 16L18 29M29 16L18 29"
        className="stroke-secondary"
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      {/* Skydiver Body Dot */}
      <circle cx="18" cy="30" r="1.5" className="fill-secondary" />
    </svg>
  );
}
