import styled from 'styled-components/native';

export const CustomText = styled.Text`
  color: ${({ color, theme }) => color || theme.colors.white};
  font-size: ${({ theme, size }) => theme.metrics.px(size || 24)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
  font-family: ${({ theme, fontFamily }) =>
    theme.fonts[fontFamily || 'regular']};
  line-height: ${({ lh, size, theme }) => theme.metrics.px(lh || size || 24)}px;
  text-align: ${({ align }) => align || 'left'};
`;
