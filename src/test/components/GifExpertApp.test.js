
import React from 'react'
import GifExpertApp from '../../components/GifExpertApp';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';





describe('pruebas en componente <GifExpertApp />', () => {
  test('debe de mostrarte el componente corectamente', () => {
    
    const wrapper  = shallow(<GifExpertApp  />)
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['One Punch', 'Hunter X'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })
  
  
});
