import styled from "styled-components";

interface TitleTextProps {
  size?: "xl" | "l" | "m" | "s" | "xs";
  weight?: string | number;
}

interface RegularTextProps {
  size?: "l" | "m" | "s";
  weight?: string | number;
}

export const TitleText = styled.h1<TitleTextProps>`
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? "m"}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 800};
`;

export const RegularText = styled.p<RegularTextProps>`
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? "m"}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 400};
`;
