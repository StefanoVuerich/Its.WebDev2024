import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink, Table, Button, Container, Card, CardBody, CardTitle, Row, Col, CardSubtitle, CardText } from "reactstrap";
import _ from "lodash";

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const products = [
            {
                Id: 1,
                Name: "Product 1"
            },
            {
                Id: 2,
                Name: "Product 2"
            },
            {
                Id: 3,
                Name: "Product 3"
            },
            {
                Id: 4,
                Name: "Product 4"
            },
            {
                Id: 5,
                Name: "Product 5"
            },
            {
                Id: 6,
                Name: "Product 6"
            },
            {
                Id: 7,
                Name: "Product 7"
            },
            {
                Id: 8,
                Name: "Product 8"
            }
        ]

        return (
            <div>
                <Container>
                    {_.chunk(products, 4).map((x, i) => (
                        <Row key={i}>
                            {x.map(y => (
                                <Col xs="12" md="3" key={y.Id}>
                                    <Card
                                        style={{
                                            width: '18rem'
                                        }}
                                    >
                                        <img
                                            alt="Sample"
                                            src="https://picsum.photos/id/135/318/180?grayscale&blur=10"
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {y.Name}
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                Card subtitle
                                            </CardSubtitle>
                                            <CardText>
                                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                            </CardText>
                                            <Link to={`/product/${y.Id}`}>
                                                <Button>
                                                    Detail
                                                </Button>
                                            </Link>
                                        </CardBody>
                                    </Card>
                                    <br />
                                </Col>
                            ))}
                        </Row>
                    ))}
                </Container>
            </div>)
    }
}

export default ProductList;