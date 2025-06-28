import {
    Container,
    FounderSection,
    InfoSection,
    ContactsSection,
    Subtitle,
    ContactsContainer,
    ContactsButton
} from './styles'

import DefaultHeader from '../../components/Header'
import DefaultFooter from '../../components/Footer'

import Logo from '../../assets/icons/logo-dona-ge.png'
import Founder from '../../assets/images/fundadora-dona-ge.jpeg'

import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function About() {


    const anotherTab = (url) => {
        window.open(url, '_blank')
    }

    const { ref: refInfo, inView: inViewInfo } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refContacts, inView: inViewContacts } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refFounder, inView: inViewFounder } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <Container>
            <DefaultHeader />

            <InfoSection
                as={motion.div}
                ref={refInfo}
                initial={{ opacity: 0, x: -50 }}
                animate={inViewInfo ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <img src={Logo} />

                <div>
                    <Subtitle>Conheça mais sobre nós!</Subtitle>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusantium quod. Dolore iusto voluptates quasi assumenda!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat possimus suscipit et, repudiandae voluptatem nemo aperiam.
                        Quis dolorum quos modi quibusdam perspiciatis dolores eaque sequi vitae debitis illo. Autem, asperiores.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet minima sint adipisci odit pariatur,
                        delectus blanditiis quos quas distinctio quisquam fuga magni odio est veritatis consequuntur harum temporibus libero ad. </p>
                </div>
            </InfoSection>

            <ContactsSection
                as={motion.div}
                ref={refContacts}
                initial={{ opacity: 0, x: -50 }}
                animate={inViewContacts ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
            >

                <ContactsContainer>
                    <Subtitle>Nossos Contatos</Subtitle>

                    <div>
                        <ContactsButton type='button'>
                            <FaWhatsapp />
                            <p>11 99999-9999</p>
                        </ContactsButton>
                    </div>

                    <div>
                        <ContactsButton onClick={() => anotherTab('https://www.facebook.com/genilda.samuel?locale=pt_BR')} type='button'>
                            <FaFacebook />
                            <p>Genilda Silva</p>
                        </ContactsButton>
                    </div>

                    <div>
                        <ContactsButton onClick={() => anotherTab('https://www.instagram.com/genildasilva75/')} type='button'>
                            <FaInstagram />
                            <p>@genildasilva75</p>
                        </ContactsButton>
                    </div>
                </ContactsContainer>

            </ContactsSection>

            <FounderSection
                as={motion.div}
                ref={refFounder}
                initial={{ opacity: 0, x: -50 }}
                animate={inViewFounder ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <img src={Founder} />

                <div>
                    <Subtitle>Conheça nossa fundadora!</Subtitle>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat, neque cum ratione enim molestiae blanditiis,
                        fugit reprehenderit rem cumque ipsa labore deserunt assumenda, laudantium atque praesentium perspiciatis maxime excepturi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio vel, quis officiis mollitia quos explicabo molestiae officia
                    </p>
                </div>

            </FounderSection>

            <DefaultFooter />
        </Container>
    )
}

export default About