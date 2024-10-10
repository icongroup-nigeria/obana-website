import { classNames } from '@/Utils/functions';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  variant?: 'ghost' | 'primary';
  className?: string;
  children: ReactNode;
  icon?: boolean;
};

const Button = ({ variant, className, children, icon }: Props) => {
  return (
    <button
      className={classNames(
        variant === 'ghost' ? ' text-obGray-700' : 'bg-primary text-white',
        'px-5 py-2.5 hover:opacity-75 rounded-xl',
        icon ? 'flex items-center justify-center gap-2' : '',
        className ?? 'px-5 py-2.5'
      )}
    >
      <span>{children}</span>
      {icon && <ChevronRight className="w-5 h-5" />}
    </button>
  );
};

export default Button;
