import {shallow} from 'enzyme';
import Budgets from '../budgets';

describe('<Budgets />', () => {
  it('Adds new project to state on click', () => {
    const wrapper = shallow(<Budgets />);

    wrapper.find('input').at(0).simulate('change', { target: { value: 'proj' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 50 } });
    wrapper.find('.budget-button').simulate('click');
  });
});