import React          from 'react';
import { connect }    from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import keys           from '../../../client/config/keys';
import Head           from '../../helpers/helmet';
import requireAuth    from '../hoc/requireAuth';
import { handleToken } from '../../actions/users';

export class Credit extends React.Component {

    render() {
        
        const headInfo = { 
            title: 'Mi Accounting | Credits', 
            ogTitle: 'Credits', 
            ogURL: 'http://localhost:3000/credits'
        };

        return (
            <div className="row justify-content-md-center">
                <div className="col-md-12 text-center">
                    <Head {...headInfo} />
                    <h1>Credits &amp; Payments</h1>
                    Your credits: {this.props.authUser.credits}
                    <StripeCheckout 
                        name="My Accountbook"
                        description="Buy your extra credits!"
                        ComponentClass="div"
                        amount={500}
                        // email={this.props.authUser.email}
                        currency="EUR"
                        alipay
                        bitcoin
                        token={token => this.props.handleToken(token)}
                        stripeKey={keys.stripePublishableKey}
                    >
                    <button type="button" className="btn btn-primary">
                        Pay with Creditcard
                    </button>
                    </StripeCheckout>
                </div>
            </div>
        );
    };

}

const mapStateToProps = ({ authUser }) => {
    return {
        authUser
    };
};

export default {
    // CONNECT AND MAP THE CURRENT STATE OF THE STORE TO THE THIS.PROPS OBJECT
    // HOC, THIS WILL RUN THE REQUIRED AUTH FUNCTION AND PASS BACK ALL THE PROPS
    component: connect(mapStateToProps, { handleToken })(requireAuth(Credit))
};