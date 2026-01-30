import { useId, type FC } from 'react';

export const Input: FC<InputProps> = ({
  onChange,
  title,
  value,
  className,
  placeholder,
  type,
}) => {
  const id = useId();
  return (
    <div className={className}>
      <div>
        <label
          htmlFor={id}
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          {title}
        </label>
        <input
          type={type}
          id={id}
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

interface InputProps {
  className?: string;
  title: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  type: string;
}
