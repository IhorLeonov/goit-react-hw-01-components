import styled from 'styled-components';

export const StatSection = styled.section`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 600px;

  text-align: center;
  border-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const StatTitle = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  text-transform: uppercase;
  font-size: 28px;
`;

export const StatList = styled.ul`
  display: flex;
  border-top: ${props => `1px solid ${props.theme.colors.bd}`};
  background-color: ${props => props.theme.colors.bg};
`;

export const StatItem = styled.li`
  flex-basis: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-right: ${props => `1px solid ${props.theme.colors.bd}`};

  &:last-child {
    border-right: none;
  }
`;

export const StatLabel = styled.span`
  display: block;
  color: ${props => props.theme.colors.font};
`;

export const StatPercentage = styled.span`
  display: block;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.getRandomHexColor()};
`;
