import clsx from 'clsx';
import { IconProps } from '.';

export default function ArrowLeft({ className, transform, ...reset }: Readonly<IconProps>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, 'w-6 h-6 -rotate-90')}
      transform={transform}
      {...reset}
    >
      <path
        d="M19.2806 11.0306C19.211 11.1004 19.1283 11.1557 19.0372 11.1934C18.9462 11.2312 18.8486 11.2506 18.75 11.2506C18.6514 11.2506 18.5538 11.2312 18.4628 11.1934C18.3718 11.1557 18.289 11.1004 18.2194 11.0306L12.75 5.56031V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V5.56031L5.78063 11.0306C5.6399 11.1714 5.44903 11.2504 5.25001 11.2504C5.05098 11.2504 4.86011 11.1714 4.71938 11.0306C4.57865 10.8899 4.49959 10.699 4.49959 10.5C4.49959 10.301 4.57865 10.1101 4.71938 9.96937L11.4694 3.21937C11.539 3.14964 11.6218 3.09432 11.7128 3.05658C11.8038 3.01883 11.9014 2.9994 12 2.9994C12.0986 2.9994 12.1962 3.01883 12.2872 3.05658C12.3783 3.09432 12.461 3.14964 12.5306 3.21937L19.2806 9.96937C19.3504 10.039 19.4057 10.1217 19.4434 10.2128C19.4812 10.3038 19.5006 10.4014 19.5006 10.5C19.5006 10.5986 19.4812 10.6962 19.4434 10.7872C19.4057 10.8782 19.3504 10.961 19.2806 11.0306Z"
        fill="currentColor"
      />
    </svg>
  );
}