import { classNames } from '@/Utils/functions';

const Headding = ({
  smallText,
  headerText,
  subText,
  align,
  size = 'sm',
  className,
}: {
  smallText?: string;
  headerText?: string;
  align?: string;
  size?: 'sm' | 'lg';
  subText?: string;
  className?: string;
}) => {
  return (
    <div className={classNames(className ?? 'text-center', 'space-y-8')}>
      {smallText && (
        <small
          className={classNames(
            size === 'sm' ? 'text-base' : 'text-lg',
            'bg-white border border-obGray-200 rounded-full text-main-blue px-4 py-1.5 shadow-[0px_0px_0px_3px_#F2F4F7B2,inset_0px_-3px_4px_0px_#F2F4F7]'
          )}
        >
          {smallText}
        </small>
      )}
      {headerText && (
        <h2 className="text-main-blue text-[2.375rem] max-md:leading-[2.85rem] md:text-5xl font-bold">
          {headerText}
        </h2>
      )}

      {subText && <p className="text-lg md:text-[22px]">{subText}</p>}
    </div>
  );
};

export default Headding;
