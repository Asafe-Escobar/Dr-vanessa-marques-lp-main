import type { SVGProps } from "react";

/** Ícones de traço fino (32×32) para os órgãos do sistema digestivo. */
const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const StomachIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M12 3v5.5c0 1.8-3.5 3.2-3.5 7.8 0 6.2 5 11.2 11 11.2 4.3 0 8-3 8-7.2 0-3.1-2.3-5.3-5.2-5.3-2 0-3.2 1-4.1 2.2-.9-1.7-1.2-3.8-1.2-6.2V3" />
    <path d="M8.5 16.5c-2 .4-3.5 1.6-4.5 3.5" />
  </svg>
);

export const IntestineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M9 5h14a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h14a3 3 0 0 1 0 6H13" />
    <path d="M13 23a2.5 2.5 0 0 0 0 5h3" />
    <path d="M6 5h3M23 5h3" />
  </svg>
);

export const LiverIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M4 12c0-3.4 3.2-5.6 7.6-5.6 6.4 0 12.8-.2 15.6 1.8 1.9 1.3 1 4.1-1.1 6.1-3 3-7 6.2-11 8.6-2 1.2-4 .3-4.2-1.8-.3-2.8-2-4-3.9-4.8C5.2 15.5 4 14.1 4 12Z" />
    <path d="M17 6.8c-.6 3.2-.2 6.4 1.6 9.2" />
  </svg>
);

export const PancreasIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M4 19c0-3.2 2.8-5.4 6-5.4 3 0 4.4-2 7.2-3 4-1.4 8.8-.6 10.4 1.8 1.2 1.9-.6 4.2-3.8 4.2-3.2 0-5.2 1-7.2 3.2-2.6 2.8-5.6 4-8.6 3.4C5.6 22.7 4 21.2 4 19Z" />
    <circle cx="9" cy="18.5" r=".6" fill="currentColor" />
    <circle cx="13" cy="17" r=".6" fill="currentColor" />
    <circle cx="18" cy="14.5" r=".6" fill="currentColor" />
    <circle cx="23" cy="13.2" r=".6" fill="currentColor" />
  </svg>
);
