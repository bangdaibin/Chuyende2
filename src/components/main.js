import React, { Component } from 'react';

import {connect} from 'react-redux';
import { fetchMainProducts } from '../actions/homepageProductAction';

import PantPage from './PantPage';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class Shelf extends Component {
  componentWillMount(){
    this.props.fetchMainProducts();
  }

  render() {
   const { products } = this.props;

    return(
       <div>
        
          <div id="wrapper" className="container">
            <section className="homepage-slider" id="home-slider">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <img src="./template/themes/images/carousel/banner-1.jpg"  />
                  </li>
                  <li>
                    <img src="./template/themes/images/carousel/banner-2.jpg"  />
                    <div className="intro">
                      <h1>Mid season sale</h1>
                      <p><span>Up to 50% Off</span></p>
                      <p><span>On selected items online and in stores</span></p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className="header_text">
              We stand for top quality templates. Our genuine developers always optimized bootstrap commercial templates.
              <br />Don't miss to use our cheap abd best bootstrap templates.
            </section>
            <section className="main-content">
              <div className="row">
                <div className="span12">
                  <div className="row">
                    <div className="span12">
                      <h4 className="title">
                        <span className="pull-left"><span className="text"><span className="line">Feature <strong>Products</strong></span></span></span>
                        <span className="pull-right">
                          <a className="left button" href="#myCarousel" data-slide="prev" /><a className="right button" href="#myCarousel" data-slide="next" />
                        </span>
                      </h4>
                      <div id="myCarousel" className="myCarousel carousel slide">
                        <div className="carousel-inner">
                          <div className="active item">
                            <ul className="thumbnails">
                            {
                            products.map(p => {
                              while(products.indexOf(p) <= 3){
                              return (
                                <li className="span3">
                                  <div className="product-box">
                                    <span className="sale_tag" />
                                    <p><a href="product_detail.html"><img className="image-size" src={require(`../static/products/${p.sku}_1.jpg`)} alt /></a></p>
                                    <a href="product_detail.html" className="title">{p.title}</a><br />
                                    <a href="products.html" className="category">Commodo consequat</a>
                                    <p className="price">${p.price}</p>
                                  </div>
                                </li>

                              )
                            }
                            })

                            }

                            </ul>
                          </div>

                          <div className="item">
                            <ul className="thumbnails">
                            {
                            products.map(p => {
                              while(products.indexOf(p) <= 3){
                              return (
                                <li className="span3">
                                  <div className="product-box">
                                    <span className="sale_tag" />
                                    <p><a href="product_detail.html"><img className="image-size" src={require(`../static/products/${p.sku}_1.jpg`)} alt /></a></p>
                                    <a href="product_detail.html" className="title">{p.title}</a><br />
                                    <a href="products.html" className="category">Commodo consequat</a>
                                    <p className="price">${p.price}</p>
                                  </div>
                                </li>

                              )
                            }
                            })

                            }

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="span12">
                      <h4 className="title">
                        <span className="pull-left"><span className="text"><span className="line">Latest <strong>Products</strong></span></span></span>
                        <span className="pull-right">
                          <a className="left button" href="#myCarousel-2" data-slide="prev" /><a className="right button" href="#myCarousel-2" data-slide="next" />
                        </span>
                      </h4>
                      <div id="myCarousel-2" className="myCarousel carousel slide">
                        <div className="carousel-inner">
                          <div className="active item">
                            <ul className="thumbnails">
                            {
                            products.map(p => {
                              while(products.indexOf(p) <= 3){
                              return (
                              <li className="span3">
                                <div className="product-box">
                                  <span className="sale_tag" />
                                  <p><a href="product_detail.html"><img src={require(`../static/products/${p.sku}_1.jpg`)} alt /></a></p>
                                  <a href="product_detail.html" className="title">{p.title}</a><br />
                                  <a href="products.html" className="category">Commodo consequat</a>
                                  <p className="price">{p.currencyFormat}{p.price}</p>
                                </div>
                              </li>
                            )
                          }
                          })

                          }

                            </ul>
                          </div>
                          <div className="item">
                            <ul className="thumbnails">
                            {
                            products.map(p => {
                              while(products.indexOf(p) > 3){
                              return (
                              <li className="span3">
                                <div className="product-box">
                                  <p><a href="product_detail.html"><img src={require(`../static/products/${p.sku}_1.jpg`)} alt /></a></p>
                                  <a href="product_detail.html" className="title">{p.title}</a><br />
                                  <a href="products.html" className="category">Quis nostrud</a>
                                  <p className="price">{p.currencyFormat}{p.price}</p>
                                </div>
                              </li>
                            )
                          }
                          })

                          }

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row feature_box">
                    <div className="span4">
                      <div className="service">
                        <div className="responsive">
                          <img src="./template/themes/images/feature_img_2.png" alt />
                          <h4>MODERN <strong>DESIGN</strong></h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                        </div>
                      </div>
                    </div>
                    <div className="span4">
                      <div className="service">
                        <div className="customize">
                          <img src="./template/themes/images/feature_img_1.png" alt />
                          <h4>FREE <strong>SHIPPING</strong></h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                        </div>
                      </div>
                    </div>
                    <div className="span4">
                      <div className="service">
                        <div className="support">
                          <img src="./template/themes/images/feature_img_3.png" alt />
                          <h4>24/7 LIVE <strong>SUPPORT</strong></h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="our_client">
              <h4 className="title"><span className="text">Manufactures</span></h4>
              <div className="row">
                <div className="span2">
                  <a href="#"><img alt src="./template/themes/images/clients/14.png" /></a>
                </div>
                <div className="span2">
                  <a href="#"><img alt src="./template/themes/images/clients/35.png" /></a>
                </div>
                <div className="span2">
                  <a href="#"><img alt src="./template/themes/images/clients/1.png" /></a>
                </div>
                <div className="span2">
                  <a href="#"><img alt src="./template/themes/images/clients/2.png" /></a>
                </div>
                <div className="span2">
                  <a href="#"><img alt src="./template/themes/images/clients/3.png" /></a>
                </div>
                <div className="span2">
                  <a href="#"><img alt src="./template/themes/images/clients/4.png" /></a>
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
})

export default connect(mapStateToProps,{fetchMainProducts})(Shelf);
