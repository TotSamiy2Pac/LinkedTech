import React from 'react';
import {Button} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Layout from "../../components/Layout";

const ProductPage = () => {
    const products = useSelector(state => state.productsReducer.products)
    const {id} = useParams()
    const product = products[id -1]
    console.log(product)
    return (
        <Layout>
            <div className="box product-box">
                <div className="__left-box">
                    <Button className={'__cart-logo'} variant={'text'}>
                        <svg className={'__svg'}  xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <circle cx="22" cy="22" r="22" fill="#F3F3F3"/>
                            <circle cx="22" cy="22" r="19" fill="white"/>
                            <path d="M19.3182 30.2727C19.7198 30.2727 20.0455 29.9471 20.0455 29.5454C20.0455 29.1438 19.7198 28.8182 19.3182 28.8182C18.9165 28.8182 18.5909 29.1438 18.5909 29.5454C18.5909 29.9471 18.9165 30.2727 19.3182 30.2727Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M27.3182 30.2727C27.7198 30.2727 28.0455 29.9471 28.0455 29.5454C28.0455 29.1438 27.7198 28.8182 27.3182 28.8182C26.9165 28.8182 26.5909 29.1438 26.5909 29.5454C26.5909 29.9471 26.9165 30.2727 27.3182 30.2727Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.5 15H16.4091L18.3582 24.7382C18.4247 25.073 18.6068 25.3738 18.8728 25.5879C19.1387 25.8019 19.4714 25.9156 19.8127 25.9091H26.8818C27.2231 25.9156 27.5559 25.8019 27.8218 25.5879C28.0877 25.3738 28.2699 25.073 28.3364 24.7382L29.5 18.6364H17.1364" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                    <img className={'__img'} src={product.thumbnail} alt=""/>
                </div>
                <div className="__right-box">
                    <Link to={`/product/${product.id}`}>
                        <h3 className={'__title-product'}>{product.title}</h3>
                    </Link>
                    <p className={'__description-product'}>{product.description}</p>
                    <div className="__price">
                        <label>${product.price - (product.price * product.discountPercentage / 100).toFixed(0)}</label>
                        <label className={'__discount'}>${product.price}</label>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default ProductPage;