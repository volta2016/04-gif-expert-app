
import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifGridItem  from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un Título';
  const url = 'https://localhost/algo.jpg';
  const wrapper  = shallow(<GifGridItem title={title} url={url}/>)
  
  test('debe de mostrar el componente correctamente', () => { 
    expect(wrapper).toMatchSnapshot(); 
  })

  test('debe de tener un parrafo con el title', () => {
    
    const paragraph = wrapper.find('p');
    expect(paragraph.text().trim()).toBe(title)

  })

  test('debe de tener la imagen a la url de los props', () => {

    const img = wrapper.find('img');
    // console.log(img.prop('src'));
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })
  
  
  
});

