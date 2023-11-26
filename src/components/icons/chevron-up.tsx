import clsx from 'clsx';
import { IconProps } from '.';

export default function ChevronUp({ className, transform, ...reset }: Readonly<IconProps>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, 'w-6 h-6')}
      transform={transform}
      {...reset}
    >
      <path
        d="M4.5 15.75L12 8.25L19.5 15.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
