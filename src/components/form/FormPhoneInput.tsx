import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import './FormPhoneInput.css'
import { IconAlertCircle } from '@tabler/icons-react';

interface FormPhoneInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
  disabled?: boolean;
  errorClassName?: string;
}

export default function FormPhoneInput({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled,
  errorClassName
}: FormPhoneInputProps) {
  return (
    <div className="relative flex flex-col">
      {label && (
        <label htmlFor={name} className="hidden">
          {label}
        </label>
      )}
      <PhoneInput
        inputProps={{
          name,
          id: name,
          required: true,
        }}
        enableSearch={true}
        placeholder={placeholder || "Enter your WhatsApp number"}
        onChange={onChange}
        country='de'
        value={value}
        disabled={disabled}
      />
      {error && (
        <div className={`mt-1 flex items-center gap-1.5 text-[10px] text-red-600 ${errorClassName || ''}`}>
          <IconAlertCircle size={12} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
