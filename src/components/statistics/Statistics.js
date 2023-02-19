import PropTypes from 'prop-types';

import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from 'components/statistics/Statistics.styled';
import { getRandomHexColor } from 'components/utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage getRandomHexColor={getRandomHexColor}>
              {percentage}
            </StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
