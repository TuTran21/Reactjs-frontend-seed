/**
 *
 * Talent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function Talent() {
  return (
    <div>
      <Helmet>
        <title>Talent</title>
        <meta name="description" content="Description of Talent" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Talent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Talent;
