import tw from 'tailwind-styled-components';

interface H3Props {
  $variant: 'green' | 'orange';
}

export const H3 = tw.h3<H3Props>`
    ${(p) => (p.$variant === 'green' ? 'text-cyan-300' : '')}
    ${(p) => (p.$variant === 'orange' ? 'bg-indigo-600' : '')}
    uppercase text-[12px]
`;

interface H4Props {
  $variant: 'green' | 'white';
}
export const H4 = tw.h4<H4Props>`
    ${(p) => (p.$variant === 'green' ? 'text-cyan-300' : '')}
    ${(p) => (p.$variant === 'white' ? 'bg-indigo-600' : '')}
    uppercase text-[12px]
`;

interface H2Props {
  $variant: 'green' | 'white';
}
export const H2 = tw.h2<H2Props>`
    ${(p) => (p.$variant === 'green' ? 'text-cyan-300' : '')}
    ${(p) => (p.$variant === 'white' ? 'text-white' : '')}
    uppercase text-[18px]
`;
