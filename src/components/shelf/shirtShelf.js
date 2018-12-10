import React, {Component} from 'react';

import {connect}  from 'react-redux';
import {fetchShirtProducts} from '../../actions/shirtActions';
import { addProduct } from '../../actions/floatCartActions';

import Filter from './filter';
import ShelfHeader from './ShelfHeader';
import Clearfix from '../Clearfix';
import Product from './Product';


class Shelf extends Component {

  state  = {
    loading: false,
  }

  componentWillMount() {
    const { filters, sort } = this.props;

    this.handleFetchProducts(filters, sort);
  }

  componentWillReceiveProps(nextProps) {
    const { filters: nextFilters, sort: nextSort } = nextProps;

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(nextFilters, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts( undefined, nextSort);
    }
  }

  handleFetchProducts = (filters = this.props.filters, sort = this.props.sort) => {
    this.setState({ loading: true });
    this.props.fetchShirtProducts(filters, sort, () => {
      this.setState({ loading: false });
    });
  }


  render() {
    const { products } = this.props;

    const p = products.map(p => {
      return (
        <Product
            product={p}
            addProduct={this.props.addProduct}
            key={p.id}
        />
      )
    });
    /*     <h1>CCCCCCCCCCCCCCCCCC</h1>
              <div className="shelf-container">
                <ShelfHeader productsLength={products.length} />
                {p}
                <Clearfix />
              </div>
      */
    return(
         <div>

        <div id="wrapper" className="container">


          <section className="header_text sub">
            <img className="pageBanner" src="./template/themes/images/pageBanner.png" alt="New products" />
            <h4><span>New products</span></h4>
          </section>
          <section className="main-content">

            <div className="row">
              <div className="span9">
                <Filter />
              <div className="shelf-container">
                <ShelfHeader productsLength={products.length} />
                {p}
                <Clearfix />
              </div>

                <hr />
                <div className="pagination pagination-small pagination-centered">
                  <ul>
                    <li><a href="#">Prev</a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">Next</a></li>
                  </ul>
                </div>
              </div>
              <div className="span3 col">
                <div className="block">
                  <ul className="nav nav-list">
                    <li className="nav-header">SUB CATEGORIES</li>
                    <li><a href="products.html">Nullam semper elementum</a></li>
                    <li className="active"><a href="products.html">Phasellus ultricies</a></li>
                    <li><a href="products.html">Donec laoreet dui</a></li>
                    <li><a href="products.html">Nullam semper elementum</a></li>
                    <li><a href="products.html">Phasellus ultricies</a></li>
                    <li><a href="products.html">Donec laoreet dui</a></li>
                  </ul>
                  <br />
                  <ul className="nav nav-list below">
                    <li className="nav-header">MANUFACTURES</li>
                    <li><a href="products.html">Adidas</a></li>
                    <li><a href="products.html">Nike</a></li>
                    <li><a href="products.html">Dunlop</a></li>
                    <li><a href="products.html">Yamaha</a></li>
                  </ul>
                </div>
                <div className="block">
                  <h4 className="title">
                    <span className="pull-left"><span className="text">Randomize</span></span>
                    <span className="pull-right">
                      <a className="left button" href="#myCarousel" data-slide="prev" /><a className="right button" href="#myCarousel" data-slide="next" />
                    </span>
                  </h4>
                  <div id="myCarousel" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="active item">
                        <ul className="thumbnails listing-products">
                          <li className="span3">
                            <div className="product-box">
                              <span className="sale_tag" />
                              <img alt src="./template/themes/images/ladies/1.jpg" /><br />
                              <a href="product_detail.html" className="title">Fusce id molestie massa</a><br />
                              <a href="#" className="category">Suspendisse aliquet</a>
                              <p className="price">$261</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="item">
                        <ul className="thumbnails listing-products">
                          <li className="span3">
                            <div className="product-box">
                              <img alt src="./template/themes/images/ladies/2.jpg" /><br />
                              <a href="product_detail.html" className="title">Tempor sem sodales</a><br />
                              <a href="#" className="category">Urna nec lectus mollis</a>
                              <p className="price">$134</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <h4 className="title"><strong>Best</strong> Seller</h4>
                  <ul className="small-product">
                    <li>
                      <a href="#" title="Praesent tempor sem sodales">
                        <img src="./template/themes/images/ladies/3.jpg" alt="Praesent tempor sem sodales" />
                      </a>
                      <a href="#">Praesent tempor sem</a>
                    </li>
                    <li>
                      <a href="#" title="Luctus quam ultrices rutrum">
                        <img src="./template/themes/images/ladies/4.jpg" alt="Luctus quam ultrices rutrum" />
                      </a>
                      <a href="#">Luctus quam ultrices rutrum</a>
                    </li>
                    <li>
                      <a href="#" title="Fusce id molestie massa">
                        <img src="./template/themes/images/ladies/5.jpg" alt="Fusce id molestie massa" />
                      </a>
                      <a href="#">Fusce id molestie massa</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="footer-bar">
            <div className="row">
              <div className="span3">
                <h4>Navigation</h4>
                <ul className="nav">
                  <li><a href="./index.html">Homepage</a></li>
                  <li><a href="./about.html">About Us</a></li>
                  <li><a href="./contact.html">Contac Us</a></li>
                  <li><a href="./cart.html">Your Cart</a></li>
                  <li><a href="./register.html">Login</a></li>
                </ul>
              </div>
              <div className="span4">
                <h4>My Account</h4>
                <ul className="nav">
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Order History</a></li>
                  <li><a href="#">Wish List</a></li>
                  <li><a href="#">Newsletter</a></li>
                </ul>
              </div>
              <div className="span5">
                <p className="logo"><img src="./template/themes/images/logo.png" className="site_logo" alt /></p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. the  Lorem Ipsum has been the industry's standard dummy text ever since the you.</p>
                <br />
                <span className="social_icons">
                  <a className="facebook" href="#">Facebook</a>
                  <a className="twitter" href="#">Twitter</a>
                  <a className="skype" href="#">Skype</a>
                  <a className="vimeo" href="#">Vimeo</a>
                </span>
              </div>
            </div>
          </section>
          <section id="copyright">
            <span>Copyright 2013 bootstrappage template  All right reserved.</span>
          </section>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
    filters: state.filters.items,
      sort: state.sort.item,
})

export default connect (mapStateToProps,{fetchShirtProducts, addProduct })(Shelf);
