import { IconName, RenderIcon } from '@/components/icons';
import clsx from 'clsx';
import { ErrorMessage } from 'formik';
import { useState } from 'react';

interface InputPasswordFormProps {
  field: any;
  form: any;

  placeholder?: string;
  showMess?: boolean;
  label?: string;
  suffixIcon?: IconName;
  className?: string;
  required?: boolean;
}
export function InputPasswordForm({
  field,
  form,

  placeholder,
  showMess = true,
  label,
  suffixIcon,
  className,
  required = false
}: Readonly<InputPasswordFormProps>) {
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const [viewPass, setViewPass] = useState<boolean>(false);

  // click eye view pass
  const onViewPass = () => {
    setViewPass(!viewPass);
  };

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
          type={viewPass ? 'text' : 'password'}
        />
        <span
          className={clsx({
            'text-error': showError
          })}
          onClick={onViewPass}
        >
          <RenderIcon name={viewPass ? 'eye-slash' : 'eye'} />
        </span>
      </label>

      {showError && showMess && (
        <div className="text-sm text-error mt-2">
          <ErrorMessage name={name} />
        </div>
      )}
    </div>
  );
}
