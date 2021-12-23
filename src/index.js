import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {GifExpertApp} from './GifExpertApp'; 
/* Importacion con {} : export const GifExpertApp */
/* Importacion sin {} : export default GifExpertApp */
// import GifExpertApp from './GifExpertApp'

ReactDOM.render(<GifExpertApp/>,document.getElementById('root'));