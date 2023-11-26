import clsx from 'clsx';
import { IconProps } from '.';

export default function Github({ className, transform, ...reset }: Readonly<IconProps>) {
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
        d="M7.99375 1.1922C4.12969 1.19064 1 4.31876 1 8.1797C1 11.2328 2.95781 13.8281 5.68437 14.7813C6.05156 14.8734 5.99531 14.6125 5.99531 14.4344V13.2234C3.875 13.4719 3.78906 12.0688 3.64687 11.8344C3.35937 11.3438 2.67969 11.2188 2.88281 10.9844C3.36562 10.7359 3.85781 11.0469 4.42812 11.8891C4.84062 12.5 5.64531 12.3969 6.05312 12.2953C6.14219 11.9281 6.33281 11.6 6.59531 11.3453C4.39844 10.9516 3.48281 9.61095 3.48281 8.0172C3.48281 7.24376 3.7375 6.53283 4.2375 5.95939C3.91875 5.01408 4.26719 4.2047 4.31406 4.08439C5.22188 4.00314 6.16562 4.73439 6.23906 4.7922C6.75469 4.65314 7.34375 4.5797 8.00313 4.5797C8.66563 4.5797 9.25625 4.65626 9.77656 4.79689C9.95313 4.66251 10.8281 4.03439 11.6719 4.11095C11.7172 4.23126 12.0578 5.02189 11.7578 5.9547C12.2641 6.5297 12.5219 7.24689 12.5219 8.02189C12.5219 9.61876 11.6 10.9609 9.39688 11.3484C9.58558 11.534 9.73541 11.7553 9.83763 11.9995C9.93984 12.2436 9.99238 12.5057 9.99219 12.7703V14.5281C10.0047 14.6688 9.99219 14.8078 10.2266 14.8078C12.9938 13.875 14.9859 11.261 14.9859 8.18126C14.9859 4.31876 11.8547 1.1922 7.99375 1.1922Z"
        fill="currentColor"
      />
    </svg>
  );
}
