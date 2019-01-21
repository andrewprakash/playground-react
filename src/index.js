import React from 'react';
import ReactDOM from 'react-dom'
import SAS from './Components/SAS'

let j = document.querySelectorAll('[data-render="SAS-Promo"]')

let data = [
    {
        number: 1,
        layout: 3
    },
    {
        number: 2,
        layout: 1
    }
]

j.forEach((d, i) => {

    ReactDOM.render(<SAS widgetContext={data[i]} />, d);
})
