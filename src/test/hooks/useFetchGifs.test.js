import { render } from 'enzyme';
import {useFetchGifs} from '../../hooks/useFetchGifs'
import {renderHook} from '@testing-library/react-hooks'

describe('pruebas en hook useFetchGifs', () => {
  
  test('debe de retornar el estado inicial', () => {
    
    const {result }= renderHook( () => useFetchGifs('One Punch'))
    const {data, loading} = result.current
    
    
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })
  
  
});
