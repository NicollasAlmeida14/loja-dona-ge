import {
  Container,
  InfoContainer,
  Main,
  PhrasesContainer,
  Subtitle,
  Title
} from './styles'

import DefaultHeader from '../../components/Header'
import DefaultFooter from '../../components/Footer'

import { motion } from 'framer-motion'

function Home() {

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      <DefaultHeader />

      <Main>
        <PhrasesContainer>
          <Title>Dona Ge, onde há <span>tradição em cada ponto!</span></Title>

          <Subtitle> <i>Explore nossas criações e descubra peças que abraçam você!</i> </Subtitle>
        </PhrasesContainer>

        <InfoContainer>
          <div>
            <ul>
              <Subtitle>O que você encontrará aqui?</Subtitle>
              <li>Lancheiras térmicas</li>
              <li>Mochilas</li>
              <li>Estojos</li>
              <li>Necesseries</li>
              <li>Crosbodys</li>
              <li>Mochilas de praia</li>
              <li>Livros de Cordel</li>
            </ul>
          </div>
        </InfoContainer>
      </Main>

      <DefaultFooter />
    </Container>
  )
}

export default Home
