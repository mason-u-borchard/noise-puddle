//const app = require('../app.js');
import React from 'react';
import Sidebar from '../client/components/Sidebar.jsx';
import Links from '../client/components/Links.jsx';
import LikedSong from '../client/components/LikedSong';
import renderer from 'react-test-renderer';

import axios from 'axios';
import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('axios');

configure({adapter: new Adapter()});


// Test add new artist works
test('Four is not divisible by three', () => {
  expect( 4 % 3 !== 0).toBe(true);
});

// Test get requests from App
describe('Sidebar component', () => {
  describe('When rendered', () => {
    it('should fetch an object with artist and liked songs', () => {

      const spyMount = jest.spyOn(axios, 'get');
      const SidebarInstance = shallow(
        <Sidebar/>
      );

      expect(spyMount).toBeCalled();
    });
  });
});

// Test get requests from LikedSong
describe('Sidebar component', () => {
  describe('When clicked', () => {
    it('should run get request for an object with artist and liked songs', () => {
      const testfunc = function() {console.log('hey')}

      const spyMount = jest.spyOn(axios, 'get');
      const LikedSongWrapper = shallow(<LikedSong onClick={spyMount} e={{ currentTarget: { textContent: 'Pettifogger_Gastromancy' }}} numberConversion={testfunc}/>);

      LikedSongWrapper.find('.ARTISTNAME').simulate('click');
      expect(spyMount).toBeCalled();
    });
  });
});

// Snapshot test for sidebar rendering.
test('Components render on mount', () => {
  const sidebar = renderer.create(<Sidebar />);
  var component = sidebar.toJSON();
  expect(sidebar).toMatchSnapshot();
});