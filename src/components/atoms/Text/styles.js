import styled from 'styled-components/native';

export const CustomText = styled.Text`
  color: ${({ color, theme }) => color || theme.colors.white};
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
