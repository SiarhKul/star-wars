import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import { render } from "enzyme";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

console.error = message => {
	throw new Error(message);
};
