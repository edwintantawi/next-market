import * as React from 'react';

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {
  size?: number;
}

const Logo = React.forwardRef<SVGSVGElement, LogoProps>(
  ({ size = 44, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M396 176H336V116C336 104.96 344.96 96 356 96H396C407.04 96 416 104.96 416 116V156C416 167.04 407.04 176 396 176ZM416 336V396C416 407.04 407.04 416 396 416H356C344.96 416 336 407.04 336 396V336H416ZM216 296H296V216H216V296ZM156 416H116C104.96 416 96 407.04 96 396V356C96 344.96 104.96 336 116 336H176V396C176 407.04 167.04 416 156 416ZM96 156V116C96 104.96 104.96 96 116 96H156C167.04 96 176 104.96 176 116V176H116C104.96 176 96 167.04 96 156ZM416 56H336C313.9 56 296 73.9 296 96V176H216V96C216 73.9 198.1 56 176 56H96C73.9 56 56 73.9 56 96V176C56 198.1 73.9 216 96 216H176V296H96C73.9 296 56 313.9 56 336V416C56 438.1 73.9 456 96 456H176C198.1 456 216 438.1 216 416V336H296V416C296 438.1 313.9 456 336 456H416C438.1 456 456 438.1 456 416V336C456 313.9 438.1 296 416 296H336V216H416C438.1 216 456 198.1 456 176V96C456 73.9 438.1 56 416 56Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);
Logo.displayName = 'Logo';

export { Logo };
