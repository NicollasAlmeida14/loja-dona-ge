import { useState } from "react";
import { CartContext } from "./CartContext";

import { toast } from "react-toastify";

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const addToCart = (product, selectedVariation) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id && prd.variationId === (selectedVariation?.id || null))

        let newProductInCart = []

        if (cartIndex >= 0) {
            newProductInCart = [...cartProducts]
            newProductInCart[cartIndex].quantity += 1

            setCartProducts(newProductInCart)
            toast.info('Quantidade atualizada no carrinho!')
        } else {
            const newProduct = {
                id: product.id,
                print: selectedVariation?.print || product.name,
                thumbnail: selectedVariation?.thumbnail || product.thumbnail,
                price: product.price,
                variationId: selectedVariation?.id || null,
                quantity: 1
            }

            newProductInCart = [...cartProducts, newProduct]

            setCartProducts(newProductInCart)
            toast.success('Produto adicionado ao carrinho!')
        }
    }

    const removeFromCart = (productId, variationId) => {
        const updatedCart = cartProducts.filter((prd) => !(prd.id === productId && prd.variationId === variationId))

        setCartProducts(updatedCart)
        toast.error('Produto removido do carrinho!')
    }

    const increaseProduct = (productId, variationId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId && prd.variationId === variationId ? { ...prd, quantity: prd.quantity + 1 } : prd
        })

        setCartProducts(newCart)
    }

    const decreaseProduct = (productId, variationId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId && prd.variationId === variationId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId && prd.variationId === variationId ? { ...prd, quantity: prd.quantity - 1 } : prd

            })

            setCartProducts(newCart)
        } else {
            removeFromCart(productId, variationId)
        }
    }

    const values = {
        cartProducts,
        addToCart,
        removeFromCart,
        increaseProduct,
        decreaseProduct
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}