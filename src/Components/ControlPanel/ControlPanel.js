import React, { PureComponent } from 'react';
import styled from 'styled-components';

class ControlPanel extends PureComponent {
  render() {
    const { children } = this.props;
    return <Container>{children}</Container>;
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  max-width: 450px;
  align-items: center;
`;

export default ControlPanel;
