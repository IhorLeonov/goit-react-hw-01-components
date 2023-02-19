import styled from 'styled-components';

export const ProfileBox = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const ProfileDesc = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
`;

export const ProfileAvatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
`;

export const ProfileName = styled.p`
  margin-top: 40px;
  font-size: 28px;
`;

export const ProfileInfo = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: ${props => props.theme.colors.font};
`;

export const StatsList = styled.ul`
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  background-color: ${props => props.theme.colors.bg};
`;

export const StatsItem = styled.li`
  flex-basis: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  border-right: ${props => `1px solid ${props.theme.colors.bd}`};

  &:last-child {
    border-right: none;
  }
`;

export const StatsLabel = styled.span`
  display: block;
  font-size: 16px;
  color: ${props => props.theme.colors.font};
`;

export const StatsQuantity = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
`;
