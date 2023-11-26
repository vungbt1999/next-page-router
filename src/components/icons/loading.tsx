import clsx from 'clsx';
import { IconProps } from '.';

export default function Loading({ className, transform, ...reset }: Readonly<IconProps>) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, 'w-5 h-5 animate-spin')}
      transform={transform}
      {...reset}
    >
      <path
        d="M20.5 2.74169C18.0217 1.31081 15.1404 0.737697 12.3031 1.11124C9.46586 1.48478 6.83113 2.78411 4.80757 4.80769C2.78402 6.83127 1.48473 9.46602 1.11122 12.3033C0.737712 15.1406 1.31086 18.0218 2.74177 20.5002C4.17268 22.9785 6.38139 24.9154 9.02532 26.0105C11.6693 27.1056 14.6007 27.2977 17.3649 26.557C20.1291 25.8163 22.5717 24.1841 24.3138 21.9137C26.0559 19.6433 27.0001 16.8614 27 13.9997"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
