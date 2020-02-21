/**
 *
 * SearchResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function SearchResults() {
  return (
    <div>
      <Helmet>
        <title>SearchResults</title>
        <meta name="description" content="Description of SearchResults" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SearchResults.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default SearchResults;
