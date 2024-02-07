import React, { Component } from "react";
import { withRouter } from "react-router"

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { match, location, history } = this.props;
        const { params } = match;
        return (
            <div>
                Products details: {params.id}
            </div>)
    }
}

export default withRouter(ProductDetails);