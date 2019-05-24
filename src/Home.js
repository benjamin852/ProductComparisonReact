import React, { Component } from "react";

import { fetchProducts, compare } from "./actions";

import { connect } from "react-redux";

import ProductList from "./Components/ProductList/ProductList";
import Compare from "./Components/Compare/Compare";

class Home extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const selectedProduct = this.props.productState.filter(
      product => product.compare
    );
    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        <ProductList
          products={this.props.productState}
          compare={this.props.compare}
        />
        <Compare comparedProduct={selectedProduct} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productState: state.productsReducer.products
  };
};

//use when you want dispatch in actions
const mapDispatchToProps = {
  fetchProducts,
  compare
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
