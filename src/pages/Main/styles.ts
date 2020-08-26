import styled, { css } from 'styled-components/native';

import fonts from '~/styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding: 16px;
`;

const CommomFontStyle = () => css`
  margin-bottom: 10px;
  text-align: center;
`;

export const RobotoBold = styled.Text`
  font-size: 20px;
  font-family: ${fonts.Roboto_700Bold};

  ${CommomFontStyle};
`;

export const UbuntuBold = styled.Text`
  font-size: 20px;
  font-family: ${fonts.Ubuntu_700Bold};

  ${CommomFontStyle};
`;

export const RobotoRegular = styled.Text`
  font-size: 16px;
  font-family: ${fonts.Roboto_400Regular};

  ${CommomFontStyle};
`;

export const UbuntuRegular = styled.Text`
  font-size: 16px;
  font-family: ${fonts.Ubuntu_400Regular};

  ${CommomFontStyle};
`;
export const RobotoLight = styled.Text`
  font-size: 13px;
  font-family: ${fonts.Roboto_300Light};

  ${CommomFontStyle};
`;

export const UbuntuLight = styled.Text`
  font-size: 13px;
  font-family: ${fonts.Ubuntu_300Light};

  ${CommomFontStyle};
`;
