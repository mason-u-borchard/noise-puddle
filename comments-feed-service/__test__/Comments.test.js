import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Comments from '../client/src/components/Comments.jsx';
import axios from '../__mocks__/axios.js';

jest.mock('axios');

describe('Comments Component', () => {
  describe('when rendered', () => {
    it('should fetch comments', () => {
      const getSpy = jest.spyOn(axios, 'get');
      const appInstance = shallow(
        <Comments />
      );
      expect(getSpy).toBeCalled();
    });
  });
});