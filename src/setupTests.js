import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
/* 
    npm i --save-dev enzyme enzyme-adapter-react-16 (version oficial)
    npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 (adaptador no ofifial para react 17 con la version de enzyme 16)
    npm install --save-dev enzyme-to-json (para poder usar los snapshot)
 */ 
/* 
    Esto se importa en el archivo seputTest.js
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    import {createSerializer} from 'enzyme-to-json';
    Enzyme.configure({ adapter: new Adapter() });
    expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
*/
/*
    import { shallow } from 'enzyme'; en el archivo que se usara
    
    describe('nombre de la prueba',()=>{
        test('Prueba con enzyme' , ()=>{
            const saludo = 'Hola Soy Adrian'
            const wrapper = shallow(<PrimeraApp  saludo={saludo}/>)
            expect(wrapper).toMatchSnapshot();
        }) 
    })
    Al ejecutarce crea una carpeta llamada __snapshots__ la cual guarda y compara un snapshot de la prueba con el componente que se esta probando
*/


