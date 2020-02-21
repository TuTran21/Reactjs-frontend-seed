/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import theme from 'utils/theme';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Container = styled.div`
  background-color: ${theme.ncpPrimary};
`;

export function Home() {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </Container>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Home;
