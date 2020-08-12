import React from 'react';
import styled from 'styled-components';

import { FaInstagram, FaTwitter, FaFacebookF, FaConnectdevelop } from 'react-icons/fa';

const Li = styled.li`
  margin-bottom: 5px;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const A = styled.a`
  color: #999;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  cursor: pointer;
`;

// Picks a social media icon based on what number link it
var pickIcon = function(index) {
  if (index === 0) {
    return <FaInstagram />;
  }
  if (index === 1) {
    return <FaTwitter/>;
  }
  if (index === 2) {
    return <FaFacebookF/>;
  }
  if (index === 3) {
    return <FaConnectdevelop/>;
  }
};

const Link = ({link, linkName, index}) => (
  <li>
    <A href={link} target="_blank" className="profile-social-logo">
      <span>
        {pickIcon(index)}
      </span>
      <span>
        {' ' + linkName}
      </span></A>
  </li>
);

export default Link;