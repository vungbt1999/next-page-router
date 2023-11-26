import clsx from 'clsx';
import { IconProps } from '.';

export default function Gitlab({ className, transform, ...reset }: Readonly<IconProps>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, 'w-6 h-6')}
      transform={transform}
      {...reset}
    >
      <path
        d="M14.2266 8.64376L12.5234 2.85001C12.4172 2.53126 12.1625 2.3172 11.8219 2.3172C11.4813 2.3172 11.2047 2.50939 11.0984 2.82814L9.97031 6.19376H6.03438L4.90625 2.8297C4.8 2.51095 4.52344 2.31876 4.18281 2.31876C3.84219 2.31876 3.56563 2.53126 3.48125 2.85157L1.77969 8.64376C1.71563 8.85626 1.80156 9.09064 1.97188 9.21876L7.99375 13.7344L14.0359 9.21876C14.2047 9.0922 14.2906 8.85783 14.2266 8.64376Z"
        fill="currentColor"
      />
    </svg>
  );
}
