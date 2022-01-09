import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom'

describe('Prueba al componente AddCategory.js' , ()=>{
    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategory={setCategory}/>)
beforeEach(()=>{
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategory={setCategory}/>)
})

    test('debe retornar algo', ()=>{
        expect(wrapper).toMatchSnapshot()
    })

    test('debe verificar el input' , ()=>{
        const input = wrapper.find('input');
        const value = 'HolaMundo';
        input.simulate('change' , {target:{value: value}})
        expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('no debe postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit' , {preventDefault(){}})
        expect(setCategory).not.toHaveBeenCalled()
    })
    
})