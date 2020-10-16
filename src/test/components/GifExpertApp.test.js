
import React from 'react'
import GifExpertApp from '../../components/GifExpertApp';
import {shallow} from 'enzyme';





describe('pruebas en componente <GifExpertApp />', () => {
  test('debe de mostrarte el componente corectamente', () => {
    
    const wrapper  = shallow(<GifExpertApp  />)
    expect(wrapper).toMatchSnapshot();
  })
  
});
