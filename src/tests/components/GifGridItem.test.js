// import react from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"


describe('prueba en <GifGridItem />', () => {
    const id = 1;
    const title = 'un titulo';
    const url = 'http://'
    const wrapped = shallow(<GifGridItem id={id} title={title} url={url}/>);
    
    test('debe mostrar el componente correctamente', () => {
        expect(wrapped).toMatchSnapshot();
    })

    test('debe tener un parrafo el titulo', () => {
        const p = wrapped.find('p');
        expect(p.text().trim()).toBe(title)
    })
    test('debe verificar las propiedades de la imagen , src y alt', () => {
        const img = wrapped.find('img');
        // console.log(img.prop('src')) 
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('el div debe tener la clase animate__fadeIn', () => {
        const div = wrapped.find('div');
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
    })
    
    
})

