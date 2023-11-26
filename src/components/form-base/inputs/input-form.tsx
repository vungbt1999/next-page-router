import { IconName, RenderIcon } from '@/components/icons';
import clsx from 'clsx';
import { ErrorMessage } from 'formik';

interface InputFormProps {
  field: any;
  form: any;

  placeholder?: string;
  showMess?: boolean;
  label?: string;
  suffixIcon?: IconName;
  prefixIcon?: IconName;
  className?: any;
  disable?: boolean;
  required?: boolean;
}
export function InputForm({
  field,
  form,

  placeholder,
  showMess = true,
  label,
  suffixIcon,
  prefixIcon,
  className,
  disable = false,
  required = false
}: Readonly<InputFormProps>) {
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div>
      <label
        htmlFor={name}
        className={clsx('text-sm font-normal text-primary mb-2 block', {
          hidden: !label || label.length <= 0
        })}
      >
        {label}
        <span
          className={clsx('text-error ml-1', {
            hidden: required === false
          })}
        >
          *
        </span>
      </label>

      <label
        htmlFor={name}
        className={clsx(
          className,
          'flex items-center border border-solid rounded-3xl py-3 px-5 placeholder:text-tertiary transition-all ease-linear',
          {
            'border-error focus:border-error': showError,
            'border-tertiary': !showError
          }
        )}
      >
        {suffixIcon && <RenderIcon name={suffixIcon} />}
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="border-none outline-none h-full w-full text-base"
          placeholder={placeholder}
          disabled={disable}
        />
        {prefixIcon && <RenderIcon name={prefixIcon} />}
      </label>

      {showError && showMess && (
        <div className="text-sm text-error mt-2">
          <ErrorMessage name={name} />
        </div>
      )}
    </div>
  );
}
