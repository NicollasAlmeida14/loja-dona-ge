import {
    Button,
    ChoosePrintContainer,
    ChoosePrintWrapper,
    Container,
    NoVariationText,
    OptionsPrintImage,
    ProductDescription,
    ProductImage,
    ProductInfoWrapper,
    ProductName,
    ProductPrice,
    SectionContainer,
    Subtitle
} from './styles'

import { useState, useContext } from 'react'

import DefaultHeader from '../../components/Header'
import DefaultFooter from '../../components/Footer'

import { products } from '../../data/productsData'

import { CartContext } from '../../context/CartContext'

import formatCurrency from '../../utils/formatCurrency'

import { useParams } from 'react-router-dom'

import { motion } from 'framer-motion'

function ProductDetails() {
    const { addToCart } = useContext(CartContext)

    const { id } = useParams()
    const product = products.find((item => item.id === id))

    const [selectedVariation, setSelectedVariation] = useState(
        product.variations?.[0] || null
    )

    const imageToShow = selectedVariation?.img || product.img
    const nametoShow = selectedVariation?.print || product.name
    const descriptionToShow = selectedVariation?.description || product.description

    return (
        <Container>
            <DefaultHeader />

            <SectionContainer
                as={motion.div}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeOut', duration: 1 }}
            >

                <ProductInfoWrapper>
                    <ProductName>{nametoShow}</ProductName>
                    <ProductImage
                        src={imageToShow}
                        alt={nametoShow}
                    />
                    <ProductDescription>{descriptionToShow}</ProductDescription>
                    <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                    <Button onClick={() => addToCart(product, selectedVariation)} type='button'>Adicionar ao carrinho</Button>
                </ProductInfoWrapper>

                {product.variations.length > 0 && (
                    <ChoosePrintWrapper>
                        <Subtitle>
                            {
                                product.variationType === 'color'
                                    ? 'Escolha sua cor preferida'
                                    : 'Escolha sua estampa preferida'
                            }
                        </Subtitle>

                        <ChoosePrintContainer>
                            {product.variations.map((variation) => (
                                <OptionsPrintImage
                                    key={variation.id}
                                    src={variation.thumbnail} alt={variation.print}
                                    onClick={() => setSelectedVariation(variation)}
                                />

                            ))}
                        </ChoosePrintContainer>
                    </ChoosePrintWrapper>
                )}

                {product.variations.length === 0 && (
                    <ChoosePrintWrapper>
                        <NoVariationText>Este produto não possui variações no momento!</NoVariationText>
                    </ChoosePrintWrapper>
                )}

            </SectionContainer>

            <DefaultFooter />
        </Container>
    )
}

export default ProductDetails