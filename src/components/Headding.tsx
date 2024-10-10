import { classNames } from '@/Utils/functions';

const Headding = ({
  smallText,
  headerText,
  subText,
  headTextClass,
  size = 'sm',
  className,
  light,
}: {
  smallText?: string;
  headerText?: string;
  headTextClass?: string;
  size?: 'sm' | 'lg';
  subText?: string;
  className?: string;
  light?: boolean;
}) => {
  return (
    <div className={classNames(className ?? 'text-center', 'space-y-8')}>
      {smallText && (
        <small
          className={classNames(
            size === 'sm' ? 'text-base' : 'text-lg font-semibold',
            'bg-white text-main-blue border border-obGray-200 rounded-full  px-4 py-1.5 shadow-[0px_0px_0px_3px_#F2F4F7B2,inset_0px_-3px_4px_0px_#F2F4F7]'
          )}
        >
          {smallText}
        </small>
      )}
      {headerText && (
        <h2
          className={classNames(
            light ? 'text-current' : 'text-main-blue',
            headTextClass ?? 'lg:text-5xl',
            'text-[2.375rem] max-lg:leading-[2.85rem] lg:text-5xl font-bold'
          )}
        >
          {headerText}
        </h2>
      )}

      {subText && <p className="text-lg lg:text-[22px]">{subText}</p>}
    </div>
  );
};

export default Headding;
