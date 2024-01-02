import React, { useEffect, useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   total: 0,
  //   feedback: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState(0);

  useEffect(() => {
    const updateFeedbackStats = () => {
      const newTotal = good + neutral + bad;
      const newFeedback =
        newTotal === 0 ? 0 : Math.floor((good / newTotal) * 100);
      setTotal(newTotal);
      setFeedback(newFeedback.toFixed(2));
    };
    updateFeedbackStats();
  }, [good, neutral, bad]);
  const handleClick = () => {
    setGood(prevGood => prevGood + 1);
  };
  const handleClick1 = () => {
    setNeutral(prevneutral => prevneutral + 1);
  };
  const handleClick2 = () => {
    setBad(prevbad => prevbad + 1);
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleClick={handleClick}
          handleClick1={handleClick1}
          handleClick2={handleClick2}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            feedback={feedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
// handleClick = () => {
//   this.setState(
//     prevState => ({
//       good: prevState.good + 1,
//     }),
//     this.updateFeedbackStats
//   );
// };
// const handleClick = () => {
//   setGood(prevGood => prevGood + 1)
// }

// handleClick1 = () => {
//   this.setState(
//     prevState => ({
//       neutral: prevState.neutral + 1,
//     }),
//     this.updateFeedbackStats
//   );
// };
// const handleClick1 = () => {
//   setNeutral(prevneutral => prevneutral + 1)
// }

// handleClick2 = () => {
//   this.setState(
//     prevState => ({
//       bad: prevState.bad + 1,
//     }),
//     this.updateFeedbackStats
//   );
// };
// const handleClick2 = () => {
//   setBad(prevbad => prevbad + 1)
// }

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   const total = this.countTotalFeedback();
//   return total === 0 ? 0 : Math.floor((good / total) * 100);
// };

// updateFeedbackStats = () => {
//   const total = this.countTotalFeedback();
//   const feedbackPercentage = this.countPositiveFeedbackPercentage();

//   this.setState({
//     total,
//     feedback: feedbackPercentage.toFixed(2),
//   });
// };

// render() {
//   const { good, neutral, bad, total, feedback } = this.state;

// return (
//   <>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         handleClick={this.handleClick}
//         handleClick1={this.handleClick1}
//         handleClick2={this.handleClick2}
//       />
//     </Section>
//     <Section title="Statistics">
//       {total > 0 ? (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           feedback={feedback}
//         />
//       ) : (
//         <Notification message="There is no feedback" />
//       )}
//     </Section>
//   </>
// );
