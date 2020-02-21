/**
 *
 * Account
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function Account() {
  return (
    <div>
      <Helmet>
        <title>Account</title>
        <meta name="description" content="Description of Account" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Account.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Account;
