import {
    CartContainer,
    Container,
    FinalizePurchaseButton,
    ProductImage,
    ProductsCartInfos,
    ProductsCartWrapper,
    ProductsInfoContainer,
    ProductsName,
    ProductsPrice,
    ProductsQuantity,
    ProductsQuantityContainer,
    ResumeCartWrapper,
    DecreaseButton,
    IncreaseButton,
    DeleteProductButton,
    TotalItems,
    TotalPrice,
} from './styles';

import { useContext } from 'react';

import DefaultHeader from '../../components/Header';
import DefaultFooter from '../../components/Footer';

import formatCurrency from '../../utils/formatCurrency';

import { CartContext } from '../../context/CartContext';

import { FaTrashAlt } from 'react-icons/fa';
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';

import { motion } from 'framer-motion';

function ShoppingCart() {
    const { cartProducts, removeFromCart, increaseProduct, decreaseProduct } = useContext(CartContext)

    const calculateTotalPrice = cartProducts.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    const calculateTotalItems = cartProducts.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <Container>
            <DefaultHeader />

            <CartContainer
                as={motion.div}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: 'easeOut', duration: 1 }}
            >

                <ProductsCartWrapper>
                    {cartProducts.map((product, index) => (
                        <ProductsCartInfos key={index}>
                            <ProductImage src={product.thumbnail} alt={product.print} />

                            <ProductsInfoContainer>
                                <ProductsName>{product.print}</ProductsName>
                                <ProductsPrice>{formatCurrency(product.price)}</ProductsPrice>
                            </ProductsInfoContainer>

                            <ProductsQuantityContainer>
                                <DecreaseButton onClick={() => decreaseProduct(product.id, product.variationId)} type='button'>
                                    <IoIosRemoveCircle />
                                </DecreaseButton>

                                <ProductsQuantity>{product.quantity}</ProductsQuantity>

                                <IncreaseButton onClick={() => increaseProduct(product.id, product.variationId)} type='button'>
                                    <IoIosAddCircle />
                                </IncreaseButton>
                            </ProductsQuantityContainer>

                            <DeleteProductButton onClick={() => removeFromCart(product.id, product.variationId)} type='button'>
                                <FaTrashAlt />
                            </DeleteProductButton>
                        </ProductsCartInfos>
                    ))}

                </ProductsCartWrapper>

                <ResumeCartWrapper>
                    <h2>Resumo do carrinho</h2>

                    <div>
                        <TotalPrice>{`Valor total: ${formatCurrency(calculateTotalPrice)}`}</TotalPrice>
                        <TotalItems>{`Total de produtos: ${calculateTotalItems}`}</TotalItems>
                    </div>
                    <FinalizePurchaseButton type='button'>Finalizar compra</FinalizePurchaseButton>
                </ResumeCartWrapper>

            </CartContainer>

            <DefaultFooter />
        </Container>
    )
}

export default ShoppingCart;