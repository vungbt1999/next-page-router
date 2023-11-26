import clsx from 'clsx';
import { IconProps } from '.';

export default function Plus({ className, transform, ...reset }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={clsx(className, 'w-6 h-6')}
      transform={transform}
      {...reset}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}
