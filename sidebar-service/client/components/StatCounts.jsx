import React from 'react';
import styled from 'styled-components';


///////////////// STYLED COMPONENTS ////
const Td = styled.td`
  text-indent: 0;
  width: 33.33%;
  text-align: left;
  border-right: 1px solid #f2f2f2;
  display: table-cell;
  vertical-align: inherit;
`;

const IndentedDiv = styled.div`
  margin-left: 10px;
`;

const H3 = styled.h3`
  line-height: .9;
  padding: 5px 0 3px;
  fontSize: 12px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 18px 0 0;
  color: #999;
`;

const StatNumDiv = styled.div`
  fontSize: 20px;
  line-height: 1.2;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  color: #999;
`;
/////////////////

const StatCounts = (props) => (
  <Td className='stat-column'>
    <IndentedDiv>
      <H3 className="stat-title">
        {props.statTitle}
      </H3>
      <StatNumDiv className='stat-num'>
        {props.statNum}
      </StatNumDiv>
    </IndentedDiv>
  </Td>
);

export default StatCounts;