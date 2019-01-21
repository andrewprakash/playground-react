import React from 'react';
import PromoContext from './PromoContext'

import PromosContainer from './PromosContainer'

export default class SAS extends React.Component {

    state = {
        isLoading: true,
        offers: [],
    }

    componentDidMount() {
        let that = this;
        const { widgetContext } = this.props
        console.log("this", widgetContext);


        setTimeout(() => {
            that.setState({
                isLoading: false,
                offers: [
                    {
                        content: "<p>Answer a few simple questions to discover which fund might suit you best.</p>",
                        heading: "Find a fund that best suits you",
                        image: "https://bnz.co.nz/assets/personal-banking/home-loans/home-loans-fhb-promo.jpg",
                        offerID: 6,
                        offerVersion: "5",
                        primaryActionLabel: "Find out more",
                        primaryActionLink: "/personal-banking/kiwisaver/kiwisaver-investor-type"
                    },
                    {
                        content: "<p>Answer a few simple questions to discover which fund might suit you best.</p>",
                        heading: "Find a fund that best suits you",
                        image: "https://bnz.co.nz/assets/personal-banking/home-loans/home-loans-fhb-promo.jpg",
                        offerID: 6,
                        offerVersion: "5",
                        primaryActionLabel: "Find out more",
                        primaryActionLink: "/personal-banking/kiwisaver/kiwisaver-investor-type"
                    }
                ]
            })
        }, 3000)
    }

    render() {

        return (
            <PromoContext.Provider value={this.state}>
                <PromosContainer />
            </PromoContext.Provider>
        )
    }
}