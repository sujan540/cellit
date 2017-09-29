import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import UserDelete from "../../src_users/components/UserDelete";

// unit tests for the UserDelete component
describe('UserDelete component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {show: true, user: {}, hideDelete: ()=>{}, userDelete: ()=>{}};
      const wrapper = shallow(<UserDelete {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
