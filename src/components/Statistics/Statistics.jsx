import React from 'react';
import { formatToNormalCase } from '../../helpers/helpers';

import css from './Statistics.module.scss';

const Statistics = ({ options }) => {
  return (
    <ul className={css.list}>
      {options.map(([key, value]) => (
        <li key={key}>
          <label key={key} className={css.label}>
            {formatToNormalCase(key)}: {value}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
