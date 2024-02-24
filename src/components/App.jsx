import { useState } from 'react';
import { countPercentage } from '../helpers/helpers';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import css from './App.module.scss';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalCount = state.neutral + state.bad + state.good;

  const incrementOption = (option) => {
    setState((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return state.neutral + state.bad + state.good;
  };

  const countPositiveFeedbackPercentage = () => {
    return state.good
      ? countPercentage(countTotalFeedback(), state.good).toFixed(2)
      : 0;
  };
  return (
    <div className={css.app}>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={state}
          onLeaveFeedback={incrementOption}
        />
      </Section>
      <Section title="Statistics">
        {totalCount ? (
          <Statistics
            options={state}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" className={css.label} />
        )}
      </Section>
    </div>
  );
}

export default App;
