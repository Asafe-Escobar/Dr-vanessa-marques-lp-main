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


export const IntestineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M9 5h14a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h14a3 3 0 0 1 0 6H13" />
    <path d="M13 23a2.5 2.5 0 0 0 0 5h3" />
    <path d="M6 5h3M23 5h3" />
  </svg>
);



/** Microbiota: bastonetes e cocos agrupados. */
export const DysbiosisIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <rect x="5" y="8" width="11" height="5" rx="2.5" transform="rotate(-25 10.5 10.5)" />
    <rect x="15" y="17" width="12" height="5" rx="2.5" transform="rotate(20 21 19.5)" />
    <circle cx="22" cy="9" r="3" />
    <circle cx="9" cy="22" r="3.4" />
    <circle cx="16" cy="13.5" r="1.3" />
    <circle cx="26.5" cy="13" r="1" />
    <circle cx="14" cy="27" r="1" />
  </svg>
);

/** SIBO e IMO: alças do intestino com bactérias. */
export const SiboIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M9 5h14a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h14a3 3 0 0 1 0 6H13" />
    <path d="M13 23a2.5 2.5 0 0 0 0 5h3" />
    <circle cx="12" cy="8" r=".9" fill="currentColor" />
    <circle cx="19" cy="14" r=".9" fill="currentColor" />
    <circle cx="15" cy="20" r=".9" fill="currentColor" />
  </svg>
);

/** H. pylori: bactéria espiralada com flagelos. */
export const PyloriIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M7 19c2-4 4-4 6 0s4 4 6 0 4-4 6 0" strokeWidth={3.2} />
    <path d="M25 19c1.5-1 3-1 4.5.5M25 19c1.5 1.5 2.5 3 2.5 5M25 19c2 .2 3.5 1.4 4.5 3" />
    <path d="M7 19c-1.4-1.2-2.6-1.4-3.8-.6" />
  </svg>
);

/** Motilidade: ondas de movimento com direção. */
export const MotilityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M4 10c3-3 5-3 8 0s5 3 8 0 5-3 8 0" />
    <path d="M4 17c3-3 5-3 8 0s5 3 8 0" />
    <path d="M20 17h7m-2.5-2.5L27 17l-2.5 2.5" />
    <path d="M4 24c3-3 5-3 8 0s5 3 8 0 5-3 8 0" />
  </svg>
);

/** Teste respiratório: pulmões. */
export const BreathTestIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <path d="M16 4v10m0 0c-.8 1.6-2 2.4-3.5 2.6M16 14c.8 1.6 2 2.4 3.5 2.6" />
    <path d="M12.5 9C8.6 9 5 15 5 21c0 3 1.6 5 4 5 2.2 0 3.5-1.6 3.5-4.2V9Z" />
    <path d="M19.5 9c3.9 0 7.5 6 7.5 12 0 3-1.6 5-4 5-2.2 0-3.5-1.6-3.5-4.2V9Z" />
  </svg>
);
