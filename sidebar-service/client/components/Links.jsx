import React from 'react';
import Link from './Link.jsx';
import styled from 'styled-components';

// Website names
var array = ['Instagram', 'Twitter', 'Facebook', 'Website'];


const Ul = styled.ul`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  list-style: none;
  margin: 0;
`;


const Links = ({links}) => (
  <Ul>
    {links.map((link, index) =>

      <Link
        link={link}
        linkName={array[index]}
        index={index}
        key={index}
      />
    )}
  </Ul>
);

export default Links;