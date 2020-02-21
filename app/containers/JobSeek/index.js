/**
 *
 * JobSeek
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function JobSeek() {
  return (
    <div>
      <Helmet>
        <title>JobSeek</title>
        <meta name="description" content="Description of JobSeek" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

JobSeek.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default JobSeek;
