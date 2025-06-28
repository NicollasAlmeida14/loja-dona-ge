import {
    CardWrapper,
    Container,
    ProductDescription,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductsCards,
    SectionContainer,
    Title
} from './styles'

import { useState, useEffect } from 'react';

import DefaultHeader from '../../components/Header'
import DefaultFooter from "../../components/Footer"

import { products } from '../../data/productsData';

import formatCurrency from '../../utils/formatCurrency';

import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

function Products() {
    const bags = products.filter((item => item.category === 'mochila'))
    const necessaires = products.filter((item => item.category === 'necessaire'))
    const thermals = products.filter((item => item.category === 'térmicos'))

    const navigate = useNavigate();

    const [slidePerView, setSlidePerView] = useState(3)

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidePerView(1)
            } else {
                setSlidePerView(3)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const { ref: refBags, inView: inViewBags } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refNecessaires, inView: inViewNecessaires } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refThermals, inView: inViewThermals } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <Container>
            <DefaultHeader />

            <SectionContainer
                as={motion.div}
                ref={refBags}
                initial={{ opacity: 0, x: -50 }}
                animate={inViewBags ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
            >

                <Title>Escolha a bolsa que mais <span>combina com você!</span></Title>

                <Swiper
                    slidesPerView={slidePerView}
                    spaceBetween={30}
                    navigation
                    modules={[Navigation]}
                    style={{ marginTop: '10px', zIndex: 0 }}
                >

                    {bags.map((product) => (
                        <SwiperSlide key={product.id}>
                            <CardWrapper>
                                <ProductsCards onClick={() => navigate(`/produtos/${product.id}`)}>
                                    <ProductImage
                                        src={product.thumbnail}
                                        alt={product.name}
                                    />
                                    <ProductName>{product.name}</ProductName>
                                    <ProductDescription>{product.description}</ProductDescription>
                                    <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                                </ProductsCards>
                            </CardWrapper>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </SectionContainer>

            <SectionContainer
                as={motion.div}
                ref={refNecessaires}
                initial={{ opacity: 0, x: -50 }}
                animate={inViewNecessaires ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
            >

                <Title>Precisando de necessaire? <span>Aqui tem!</span></Title>

                <Swiper
                    slidesPerView={slidePerView}
                    spaceBetween={30}
                    navigation
                    modules={[Navigation]}
                    style={{ marginTop: '10px', zIndex: 0 }}
                >

                    {necessaires.map((product) => (
                        <SwiperSlide key={product.id}>
                            <CardWrapper>
                                <ProductsCards onClick={() => navigate(`/produtos/${product.id}`)}>
                                    <ProductImage src={product.thumbnail} />
                                    <ProductName>{product.name}</ProductName>
                                    <ProductDescription>{product.description}</ProductDescription>
                                    <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                                </ProductsCards>
                            </CardWrapper>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </SectionContainer>

            <SectionContainer
                as={motion.div}
                ref={refThermals}
                initial={{ opacity: 0, x: -50 }}
                animate={inViewThermals ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
            >

                <Title>Mantenha a temperatura ideal com nossos <span>produtos térmicos!</span></Title>

                <Swiper
                    slidesPerView={slidePerView}
                    spaceBetween={30}
                    navigation
                    modules={[Navigation]}
                    style={{ marginTop: '10px', zIndex: 0 }}
                >

                    {thermals.map((product) => (
                        <SwiperSlide key={product.id}>
                            <CardWrapper>
                                <ProductsCards onClick={() => navigate(`/produtos/${product.id}`)}>
                                    <ProductImage src={product.thumbnail} />
                                    <ProductName>{product.name}</ProductName>
                                    <ProductDescription>{product.description}</ProductDescription>
                                    <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                                </ProductsCards>
                            </CardWrapper>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </SectionContainer>

            <DefaultFooter />
        </Container>

    )
}

export default Products