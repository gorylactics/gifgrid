import react from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('prueba en <GifGridItem />', () => {
    test('debe mostrar el componente correctamente', () => {
        const wrapped = shallow(<GifGridItem />);
        expect(wrapped).toMatchSnapshot();
    })
})
