import styled from '@emotion/styled';

export const FriendItem = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:nth-child(n + 2) {
    margin-top: 10px;
  }
`;

export const FriendStatus = styled.span`
  margin-left: 20px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline, theme }) => {
    switch (isOnline) {
      case true:
        return theme.colors.green;
      case false:
        return theme.colors.red;
      default:
        return theme.colors.white;
    }
  }};
`;

export const FriendAva = styled.img`
  padding: 3px;
  margin-left: 20px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.bg};
`;

export const FriendName = styled.p`
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
`;
