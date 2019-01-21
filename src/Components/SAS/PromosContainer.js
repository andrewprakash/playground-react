import React from 'react';
import PromoContext from './PromoContext';
import Promo from './Promo';


export default () => (
    <div className="promo-container">
        <PromoContext.Consumer>
            {value => {
                return value.isLoading ? <div>Loading...</div> : value.offers.map((offer, i) => {
                    return <Promo key={i} offer={offer} />
                })
            }}
        </PromoContext.Consumer>
    </div>
)