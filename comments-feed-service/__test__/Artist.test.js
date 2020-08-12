import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import iconv from 'iconv-lite';
import encodings from 'iconv-lite/encodings';
iconv.encodings = encodings;

configure({ adapter: new Adapter() });


import Artist from '../client/src/components/Artist.jsx';

describe('When Follow button is clicked', () => {
  it('text should change to "followed"', () => {
    const artist = {
      "id": 1,
      "name": "testName",
      "followers_count": 999999,
      "tracks_count": 999,
      "profile_pic": "",
      "createdAt": "2020-03-18T15:36:29.000Z",
      "updatedAt": "2020-03-18T15:36:29.000Z"
  }

    const wrapper = shallow(<Artist artist={artist} />);

    const followButton = wrapper.find('#follow-button');
    expect(followButton.text()).toBe('<MdPersonAdd />  Follow');

    followButton.prop('onClick');
    expect(followButton.text()).toBe('<MdPersonAdd />  Following');
  });
});