import styled from '@emotion/styled';

export const TableTrans = styled.table`
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  width: 600px;
`;

export const TheadTrans = styled.thead`
  background-color: ${props => props.theme.colors.font};
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
`;

export const TheadItem = styled.tr`
  border: ${props => `1px solid ${props.theme.colors.bd}`};
`;

export const TheadColumn = styled.th`
  padding: 8px;
  &:last-child {
    border-top-right-radius: 3px;
  }
  &:first-child {
    border-top-left-radius: 3px;
  }
`;

export const TbodyItem = styled.tr`
  color: ${props => props.theme.colors.font};

  &:nth-child(2n) {
    background-color: ${props => props.theme.colors.bg};
  }

  &:last-child .TbodyColumn:first-child {
    border-bottom-left-radius: 3px;
  }

  &:last-child .tbodyColumn:last-child {
    border-bottom-right-radius: 3px;
  }
`;

export const TbodyColumn = styled.td`
  padding: 8px;

  &:first-child {
    text-transform: capitalize;
  }
`;
