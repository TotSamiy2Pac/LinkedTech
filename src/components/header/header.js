import React from 'react';
import logo from '../../assets/Group 165.png'
import SearchIcon from '@mui/icons-material/Search';
import {Box, Button, Link, Modal} from "@mui/material";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {CLOSE, DELETE_CART, OPEN} from "../../redux/types/types";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
const Header = () => {
    const dispatch = useDispatch()
    const open = useSelector(state => state.productsReducer.isOpen)
    const carts = useSelector(state => state.productsReducer.carts)

    const handleOpen = () => dispatch({type: OPEN});
    const handleClose = () => dispatch({type: CLOSE});


    const handleDeleteCart = (product) => () => {
        dispatch({type: DELETE_CART, payload: product})
    }

    return (
        <header>
            <div className="container">
                <div className={'box-header'}>
                    <img src={logo} alt=""/>
                    <nav className={'__nav-wrap'}>
                        <Link className={'__link'}>
                            HOME
                            <svg className={'__svg'} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" d="M1 1L5 5L9 1" stroke="#030D15" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link className={'__link'}>
                            ABOUT
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" d="M1 1L5 5L9 1" stroke="#030D15" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link className={'__link'}>
                            PRODUCT
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" d="M1 1L5 5L9 1" stroke="#030D15" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link className={'__link'}>
                            BLOG
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" d="M1 1L5 5L9 1" stroke="#030D15" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link className={'__link'}>
                            SHOP
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" d="M1 1L5 5L9 1" stroke="#030D15" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link className={'__link'}>
                            CONTACT US
                        </Link>
                    </nav>
                    <div className={'__right'}>
                        <SearchIcon/>
                        <Button className={'__cart'} onClick={handleOpen}>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81818 20.2728C7.21985 20.2728 7.54546 19.9472 7.54546 19.5455C7.54546 19.1438 7.21985 18.8182 6.81818 18.8182C6.41652 18.8182 6.09091 19.1438 6.09091 19.5455C6.09091 19.9472 6.41652 20.2728 6.81818 20.2728Z" stroke="#030D15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.8182 20.2728C15.2198 20.2728 15.5455 19.9472 15.5455 19.5455C15.5455 19.1438 15.2198 18.8182 14.8182 18.8182C14.4165 18.8182 14.0909 19.1438 14.0909 19.5455C14.0909 19.9472 14.4165 20.2728 14.8182 20.2728Z" stroke="#030D15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 5H3.90909L5.85818 14.7382C5.92469 15.073 6.10684 15.3738 6.37276 15.5879C6.63868 15.8019 6.97142 15.9156 7.31273 15.9091H14.3818C14.7231 15.9156 15.0559 15.8019 15.3218 15.5879C15.5877 15.3738 15.7699 15.073 15.8364 14.7382L17 8.63636H4.63636" stroke="#030D15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="17" cy="8" r="6" fill="#C72535">
                                    <text x="80" y="20" fontFamily="Arial" fontSize="16" fill="black">
                                        5
                                    </text>
                                </circle>
                                {/*<path d="M19.15 9.2C19.15 9.73333 18.9633 10.1767 18.59 10.53C18.2167 10.8833 17.69 11.06 17.01 11.06C16.3833 11.06 15.84 10.95 15.38 10.73V9.94C15.8733 10.2 16.41 10.33 16.99 10.33C17.4167 10.33 17.7467 10.22 17.98 10C18.22 9.78 18.34 9.49333 18.34 9.14C18.34 8.78667 18.2067 8.51667 17.94 8.33C17.68 8.13667 17.3033 8.04 16.81 8.04H16.39V7.35H16.81C17.1833 7.35 17.4967 7.24667 17.75 7.04C18.01 6.82667 18.14 6.54333 18.14 6.19C18.14 5.83667 18.03 5.57 17.81 5.39C17.59 5.21 17.2867 5.12 16.9 5.12C16.44 5.12 16 5.25667 15.58 5.53V4.76C15.9667 4.51333 16.4133 4.39 16.92 4.39C17.5667 4.39 18.0667 4.55667 18.42 4.89C18.78 5.21667 18.96 5.62333 18.96 6.11C18.96 6.46333 18.87 6.78 18.69 7.06C18.5167 7.34 18.2567 7.55 17.91 7.69C18.29 7.77667 18.59 7.95333 18.81 8.22C19.0367 8.48 19.15 8.80667 19.15 9.2Z" fill="white"/>*/}
                            </svg>
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <div className={'cart-header'}>
                                    <h3>Корзина</h3>
                                    <Button onClick={handleClose} color={'error'} variant={'contained'}>x</Button>
                                </div>
                                {
                                    carts.map(product => {
                                        return (
                                            <div key={product.id} className={'box-cart'}>
                                                <img className={'__img'} src={product.thumbnail} alt=""/>
                                                <div className="__right-box">
                                                    <Link to={`/product/${product.id}`}>
                                                        <h3 className={'__title-product'}>{product.title}</h3>
                                                    </Link>
                                                    <p className={'__description-product'}>{product.description}</p>
                                                    <div className="__price">
                                                        <label>${product.price - (product.price * product.discountPercentage / 100).toFixed(0)}</label>
                                                        <label className={'__discount'}>${product.price}</label>
                                                        <Button
                                                            color={'error'}
                                                            variant={'contained'}
                                                            onClick={handleDeleteCart(product)}
                                                        >
                                                            Удалить
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div>
                                    <h3>Итого: $
                                        {
                                            carts.reduce((acc, item) => {
                                                return acc + item.price
                                            },0)
                                        }
                                    </h3>
                                    <Button variant={'contained'}>Купить</Button>
                                </div>
                            </Box>
                        </Modal>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#F4F9FC"/>
                            <path d="M17.455 18.0122C12.6476 18.0122 10 20.2865 10 24.4161C10 24.7386 10.2614 25.0001 10.5839 25.0001H24.326C24.6486 25.0001 24.91 24.7386 24.91 24.4161C24.91 20.2867 22.2624 18.0122 17.455 18.0122ZM11.1891 23.8322C11.4188 20.7445 13.5239 19.1801 17.455 19.1801C21.3861 19.1801 23.4912 20.7445 23.7211 23.8322H11.1891V23.8322Z" fill="#030D15"/>
                            <path d="M17.455 9C15.2467 9 13.5815 10.6987 13.5815 12.9512C13.5815 15.2696 15.3192 17.1555 17.455 17.1555C19.5909 17.1555 21.3285 15.2696 21.3285 12.9513C21.3285 10.6987 19.6633 9 17.455 9ZM17.455 15.9878C15.963 15.9878 14.7494 14.6257 14.7494 12.9513C14.7494 11.3385 15.8873 10.1679 17.455 10.1679C18.9976 10.1679 20.1606 11.3644 20.1606 12.9513C20.1606 14.6257 18.947 15.9878 17.455 15.9878Z" fill="#030D15"/>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;