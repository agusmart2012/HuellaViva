type LogoProps = {
  className?: string
}

export function Logo({ className = 'h-10 w-10' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="18.5" cy="16.5" rx="6.2" ry="7.6" fill="#C45C2C" />
      <ellipse cx="18.5" cy="16.5" rx="3.6" ry="4.6" fill="#245536" />
      <ellipse cx="27.2" cy="11.4" rx="5.4" ry="6.8" fill="#C45C2C" />
      <ellipse cx="27.2" cy="11.4" rx="3.1" ry="4.1" fill="#245536" />
      <ellipse cx="36.8" cy="11.4" rx="5.4" ry="6.8" fill="#C45C2C" />
      <ellipse cx="36.8" cy="11.4" rx="3.1" ry="4.1" fill="#245536" />
      <ellipse cx="45.5" cy="16.5" rx="6.2" ry="7.6" fill="#C45C2C" />
      <ellipse cx="45.5" cy="16.5" rx="3.6" ry="4.6" fill="#245536" />
      <path
        d="M32 54.2C20.4 46.2 13.2 38.4 13.2 30.4c0-5.8 4.5-10 9.8-10 3.4 0 6.3 1.7 9 5.1 2.7-3.4 5.6-5.1 9-5.1 5.3 0 9.8 4.2 9.8 10 0 8-7.2 15.8-18.8 23.8z"
        fill="#C45C2C"
      />
      <path
        d="M32 50.4C22.4 43.8 16.8 37.4 16.8 31c0-4.2 3.2-7.2 7.1-7.2 2.6 0 4.8 1.4 7 4.4l1.1 1.5 1.1-1.5c2.2-3 4.4-4.4 7-4.4 3.9 0 7.1 3 7.1 7.2 0 6.4-5.6 12.8-15.2 19.4z"
        fill="none"
        stroke="#245536"
        strokeWidth="2.4"
      />
    </svg>
  )
}
