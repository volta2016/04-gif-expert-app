import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import AddCategory from '../../components/AddCategory';


describe('Prueba en el componente <AddCategory />', () => {
  
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={ setCategories }/>) 
  })

  test('debe mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
  });

  test('debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value: value } });

    expect(wrapper.find('p').text().trim() ).toBe(value);
  })

  test('No debe de postear la información con submit', () => {
     
    wrapper.find('form').simulate('submit', { preventDefault (){} }); 
    expect(setCategories).not.toHaveBeenCalled();

  });

   

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
     
    const value = 'Todo ok'
    // 1. simular el input change
    wrapper.find('input').simulate('change', { target: {value} }); 
    
    //2. simular el submit
    wrapper.find('form').simulate('submit', {preventDefault(){}}); 
    
    // 3. el set category se debe haber llamado por lo menos una vez
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(2);

    // 4. evualuar si la caja de texto se limpio - el valr del input debe estar ''
    expect(wrapper.find('input').prop('value')).toBe('789707');

   
    

  });
    
});
