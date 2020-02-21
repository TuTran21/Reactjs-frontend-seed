/**
 *
 * Modals
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function Modals() {
  return (
    <div>
      <Helmet>
        <title>Modals</title>
        <meta name="description" content="Description of Modals" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Modals.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Modals;
