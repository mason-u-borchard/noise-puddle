import React from 'react';
import { shallow, mount } from 'enzyme';
import regeneratorRuntime from "regenerator-runtime";

import MediaFeed from '../components/MediaFeed.js';
import ProgressBar from '../components/ProgressBar.js';
import TogglePlay from '../components/TogglePlay.js';
import MediaPlayer from '../components/MediaPlayer.js';

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

describe('MediaFeed', () => {
  test('should render snapshot', () => {
    const wrapper = shallow(<MediaFeed />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should exist', () => {
    const wrapper = shallow(<MediaFeed />);
    expect(wrapper.exists()).toBe(true);
  });
  test('should not have class names', () => {
    const wrapper = shallow(<MediaFeed />);
    expect(wrapper.hasClass()).toBe(false);
  });
});

describe('Play/Pause button', () => {
  const mockFn = jest.fn();
  test('play button should be defined', () => {
    expect(TogglePlay).toBeDefined();
  });
});

describe('ProgressBar', () => {
  test('should render snapshot', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should exist', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper.exists()).toBe(true);
  });
  test('should not have class names', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper.hasClass()).toBe(false);
  });
})