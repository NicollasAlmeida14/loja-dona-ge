import {
    Header,
    Li,
    Ul,
    Link,
    Button,
} from './styles'

import SandwichMenu from '../SandwichMenu'

import Logo from '../../assets/icons/logo-dona-ge.png'

import { FaShoppingCart } from "react-icons/fa"

import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

function DefaultHeader() {
    const { cartProducts } = useContext(CartContext)

    const navigate = useNavigate()

    const totalQuantity = cartProducts.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Header>

            <img src={Logo} />

            <Ul>
                <Li><Link onClick={() => navigate('/')}>Início</Link></Li>
                <Li><Link onClick={() => navigate('/sobre-nos')}>Sobre</Link></Li>
                <Li><Link onClick={() => navigate('/produtos')}>Produtos</Link></Li>
            </Ul>

            <Button onClick={() => navigate('/carrinho')} type='button'>
                <FaShoppingCart />
                <span>{totalQuantity}</span>
            </Button>

            <SandwichMenu />

        </Header >
    )
}

export default DefaultHeader