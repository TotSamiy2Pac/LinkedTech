import React, {useEffect} from 'react';
import Layout from "../../components/Layout";
import kolonka from '../../assets/81Z-7PzoB9L 1.png'
import './style.scss'
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/action/ProductAction";
import ProductsHomePage from "../../components/ProductsHomePage";
import logo2 from '../../assets/cl_logo2.png'
import logo4 from '../../assets/cl_logo4.png'
import logo5 from '../../assets/cl_logo5.png'
import logo7 from '../../assets/cl_logo7.png'
const HomePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products);

    useEffect(() => {
        dispatch(getProducts())
    },[])
    return (
        <Layout>
            <section className={'section-one'}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="box-left">
                                <div>
                                    <label className={'label-section-one'}>Favorite brands</label>
                                    <div className={'title'}>
                                        <h2 className={'__an'}>An exciting place</h2>
                                        <h2 className={'__for'}>for the whole family to shop.</h2>
                                    </div>
                                </div>
                                <p className={'description-section-one'}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                <div className={'__shop-now'}>
                                    <Button className={'__btn'}  variant={'contained'}>
                                        SHOP NOW
                                    </Button>
                                    <label className={'__price'}>$ 249.99</label>
                                    <label className={'__discount'}>$ 249.99</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <img src={kolonka} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={'logo-company'}>
                        <img src={logo2} alt=""/>
                        <img src={logo4} alt=""/>
                        <img src={logo5} alt=""/>
                        <img src={logo7} alt=""/>
                    </div>
                </div>
            </section>
            <section className={'section-two'}>
                <div className="container">
                    <div className="row">
                        {products &&
                            products.map(product => {
                                return(
                                    <ProductsHomePage key={product.id} product={product}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default HomePage;