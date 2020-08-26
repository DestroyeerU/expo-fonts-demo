import React from 'react';

import { Container, RobotoBold, RobotoRegular, UbuntuBold, UbuntuRegular, RobotoLight, UbuntuLight } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <RobotoBold>Lorem Ipsum is simply dummy text of the printing and typesetting industry</RobotoBold>
      <UbuntuBold>Lorem Ipsum is simply dummy text of the printing and typesetting industry</UbuntuBold>

      <RobotoRegular>Lorem Ipsum is simply dummy text of the printing and typesetting industry</RobotoRegular>
      <UbuntuRegular>Lorem Ipsum is simply dummy text of the printing and typesetting industry</UbuntuRegular>

      <RobotoLight>Lorem Ipsum is simply dummy text of the printing and typesetting industry</RobotoLight>
      <UbuntuLight>Lorem Ipsum is simply dummy text of the printing and typesetting industry</UbuntuLight>
    </Container>
  );
};

export default Main;
