import { IconName, RenderIcon } from '@/components/icons';
import clsx from 'clsx';

type ButtonBaseProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  suffixIcon?: IconName;
  prefixIcon?: IconName;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  buttonStyle?: 'primary' | 'dark';
  onClick?: () => void;
};
export function ButtonBase({
  label,
  suffixIcon,
  prefixIcon,
  loading,
  disabled,
  buttonStyle = 'primary',
  className,
  onClick
}: ButtonBaseProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        className,
        'bg-neon text-invert font-semibold text-sm flex items-center w-fit px-4 py-3 rounded-3xl justify-center'
      )}
      onClick={onClick}
    >
      {suffixIcon && <RenderIcon name={suffixIcon} className="mr-2 z-[1]" />}
      {label}
      {(prefixIcon || loading) && (
        <RenderIcon name={loading ? 'loading' : prefixIcon} className="ml-2 z-[1]" />
      )}
    </button>
  );
}
