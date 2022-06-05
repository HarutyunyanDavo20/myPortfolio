import { useState } from 'react';
import GoodsList from './GoodsList';
import Search from './Search';
import Header from './Header';
import Basket from './Basket';
import Snack from './Snack';
import { Container } from '@mui/material';
import { goods } from '../data/goods';
import "./StoreOnline.scss"
import GoBack from '../../../components/icons/GoBack';

const StoreOnline = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isSnackOpen, setIsSnackOpen] = useState(false)

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(order.map((item) => {
                    if (item.id !== goodsItem.id) return item;

                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    };
                }),
            );
        } else {
            setOrder([
                    ...order,
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            );
        }
        setIsSnackOpen(true)
    };

    const removeFromOrder = (goodsItem) => {
        setOrder(order.filter((item) => item.id !== goodsItem));
    };

    return (
        <>
        <Header orderLen={order.length} handleCart={() => setIsCartOpen(true)}/>
        <Container sx={{mt:'1rem'}}>
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />
              
         </Container>
         <Basket order={order} removeFromOrder={removeFromOrder} cartOpen={isCartOpen} closeCart={() => setIsCartOpen(false)}/>
         <Snack isOpen={isSnackOpen} handleClose={() => setIsSnackOpen(false)}/>
         <GoBack />
        </>
    );
}

export default StoreOnline;
