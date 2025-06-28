import JeansBackpack from '../assets/images/products/large/mochila-jeans.jpeg'
import FlowerBackpack from '../assets/images/products/large/mochila-de-flor.jpeg'
import CookieBackpack from '../assets/images/products/large/mochila-de-bolacha.jpeg'
import EmoticonBackpack from '../assets/images/products/large/mochila-de-emoji.jpeg'
import MonicaBackpack from '../assets/images/products/large/mochila-turma-da-monica.jpeg'
import PalmeirasBackpack from '../assets/images/products/large/mochila-palmeiras.jpeg'
import CameraBackpack from '../assets/images/products/large/mochila-camera.jpeg'
import BlackBackpack from '../assets/images/products/large/mochila-preta.jpeg'
import BeigeBackpack from '../assets/images/products/large/mochila-bege.jpeg'

import DayToDayNecessaire from '../assets/images/products/large/necessaire-dia-a-dia.jpeg'
import GreenDoubleNecessaire from '../assets/images/products/large/necessaire-dupla-verde.jpeg'
import PinkDoubleNecessaire from '../assets/images/products/large/necessaire-dupla-rosa.jpeg'
import BlackBriefcaseNecessaire from '../assets/images/products/large/necessaire-maletinha-preta.jpeg'
import BrownBriefcaseNecessaire from '../assets/images/products/large/necessaire-maletinha-marrom.jpeg'
import MaykeupHolderNecessaire from '../assets/images/products/large/necessaire-porta-maquiagem.jpeg'
import RedTravelNecessaire from '../assets/images/products/large/necessaire-viagem-vermelho.jpeg'

import BrownExecutiveThermalLunchBox from '../assets/images/products/large/lancheira-termica-executiva-marrom.jpeg'
import RedExecutiveThermalLunchBox from '../assets/images/products/large/lancheira-termica-executiva-vermelha.jpeg'
import GreenThermalLunchBox from '../assets/images/products/large/lancheira-termica-verde.jpeg'
import BlackThermalLunchBox from '../assets/images/products/large/lancheira-termica-preta.jpeg'
import BananaThermalLunchBox from '../assets/images/products/large/lancheira-termica-banana.jpeg'
import LadyBirdThermalLunchBox from '../assets/images/products/large/lancheira-termica-joaninha.jpeg'
import EmoticonThermalLunchBox from '../assets/images/products/large/lancheira-termica-emoji.jpeg'
import BlackThermalBottleHolder from '../assets/images/products/large/porta-garrafa-termico-preto.jpeg'
import GreenThermalBottleHolder from '../assets/images/products/large/porta-garrafa-termico-verde.jpeg'

import ThumbanailJeansBackpack from '../assets/images/products/small/mochila-jeans-small.jpeg'
import ThumbanailFlowerBackpack from '../assets/images/products/small/mochila-de-flor-small.jpeg'
import ThumbanailCookieBackpack from '../assets/images/products/small/mochila-de-bolacha-small.jpeg'
import ThumbanailEmoticonBackpack from '../assets/images/products/small/mochila-de-emoji-small.jpeg'
import ThumbanailMonicaBackpack from '../assets/images/products/small/mochila-turma-da-monica-small.jpeg'
import ThumbanailPalmeirasBackpack from '../assets/images/products/small/mochila-palmeiras-small.jpeg'
import ThumbanailCameraBackpack from '../assets/images/products/small/mochila-camera-small.jpeg'
import ThumbanailBlackBackpack from '../assets/images/products/small/mochila-preta-small.jpeg'
import ThumbanailBeigeBackpack from '../assets/images/products/small/mochila-bege-small.jpeg'

import ThumbanailDayToDayNecessaire from '../assets/images/products/small/necessaire-dia-a-dia-small.jpeg'
import ThumbanailGreenDoubleNecessaire from '../assets/images/products/small/necessaire-dupla-verde-small.jpeg'
import ThumbanailPinkDoubleNecessaire from '../assets/images/products/small/necessaire-dupla-rosa-small.jpeg'
import ThumbanailBlackBriefcaseNecessaire from '../assets/images/products/small/necessaire-maletinha-preta-small.jpeg'
import ThumbanailBrownBriefcaseNecessaire from '../assets/images/products/small/necessaire-maletinha-marrom-small.jpeg'
import ThumbanailMaykeupHolderNecessaire from '../assets/images/products/small/necessaire-porta-maquiagem-small.jpeg'
import ThumbanailRedTravelNecessaire from '../assets/images/products/small/necessaire-viagem-vermelho-small.jpeg'

import ThumbanailBrownExecutiveThermalLunchBox from '../assets/images/products/small/lancheira-termica-executiva-marrom-small.jpeg'
import ThumbanailRedExecutiveThermalLunchBox from '../assets/images/products/small/lancheira-termica-executiva-vermelha-small.jpeg'
import ThumbanailExecutiveThermalLunchBox from '../assets/images/products/small/lancheira-termica-executiva-small.jpeg'
import ThumbanailGreenThermalLunchBox from '../assets/images/products/small/lancheira-termica-verde-small.jpeg'
import ThumbanailBlackThermalLunchBox from '../assets/images/products/small/lancheira-termica-preta-small.jpeg'
import ThumbanailModernThermalLunchBox from '../assets/images/products/small/lancheira-termica-moderna-small.jpeg'
import ThumbanailBananaThermalLunchBox from '../assets/images/products/small/lancheira-termica-banana-small.jpeg'
import ThumbanailLadyBirdThermalLunchBox from '../assets/images/products/small/lancheira-termica-joaninha-small.jpeg'
import ThumbanailEmoticonThermalLunchBox from '../assets/images/products/small/lancheira-termica-emoji-small.jpeg'
import ThumbanailThermalBottleHolder from '../assets/images/products/small/porta-garrafa-termico-small.jpeg'
import ThumbanailBlackThermalBottleHolder from '../assets/images/products/small/porta-garrafa-termico-preto-small.jpeg'
import ThumbanailGreenThermalBottleHolder from '../assets/images/products/small/porta-garrafa-termico-verde-small.jpeg'


export const products = [
    {
        id: 'mochila 001',
        name: ' Jeans',
        img: JeansBackpack,
        thumbnail: ThumbanailJeansBackpack,
        price: '80.00',
        category: 'mochila',
        description: 'Mochila jeans com design elegante e confortável!',
        variationType: 'print',
        variations: []
    },
    {
        id: 'mochila 002',
        name: 'Estampas modernas',
        thumbnail: ThumbanailCookieBackpack,
        price: '70.00',
        category: 'mochila',
        description: 'Mochilas com estampas modernas e divertidas!',
        variationType: 'print',
        variations: [
            {
                id: 1,
                print: '🍪 Bolacha 🍪',
                img: CookieBackpack,
                thumbnail: ThumbanailCookieBackpack,
                description: 'Mochila com estampa de bolacha, perfeita para os amantes de doces!'
            },
            {
                id: 2,
                print: '🌸 Flor 🌸',
                img: FlowerBackpack,
                thumbnail: ThumbanailFlowerBackpack,
                description: 'Mochila com estampa de flor, ideal para quem ama natureza!'
            },
            {
                id: 3,
                print: '📷 Câmera 📷',
                img: CameraBackpack,
                thumbnail: ThumbanailCameraBackpack,
                description: 'Mochila com estampa de câmera, perfeita para os amantes de fotografia!'
            },
            {
                id: 4,
                print: '🌴 Palmeiras 🌴',
                img: PalmeirasBackpack,
                thumbnail: ThumbanailPalmeirasBackpack,
                description: 'Mochila com estampa de Palmeiras, ideal para os amantes da natureza!'
            },
            {
                id: 5,
                print: '👧🏻 Turma da Mônica 👧🏻',
                img: MonicaBackpack,
                thumbnail: ThumbanailMonicaBackpack,
                description: 'Mochila com estampa da Turma da Mônica, perfeita para os fãs dos quadrinhos!'
            },
            {
                id: 6,
                print: '🎒 Emoji 🎒',
                img: EmoticonBackpack,
                thumbnail: ThumbanailEmoticonBackpack,
                description: 'Mochila com estampa de emoji, ideal para quem ama tecnologia e diversão!'
            }
        ]
    },
    {
        id: 'mochila 003',
        name: 'Estampas usuais',
        thumbnail: ThumbanailBlackBackpack,
        price: '60.00',
        category: 'mochila',
        description: 'Mochilas com estampas usuais e elegantes!',
        variationType: 'print',
        variations: [
            {
                id: 1,
                print: 'Preta e branca',
                img: BlackBackpack,
                thumbnail: ThumbanailBlackBackpack,
                description: 'Mochila com estampa preta e branca, ideal para quem gosta de simplicidade!'
            },
            {
                id: 2,
                print: 'Bege',
                img: BeigeBackpack,
                thumbnail: ThumbanailBeigeBackpack,
                description: 'Mochila com estampa bege, perfeita para quem ama tons neutros!'
            }
        ]
    },

    // Necessaires

    {
        id: 'necessaire 001',
        name: 'Simples',
        img: DayToDayNecessaire,
        thumbnail: ThumbanailDayToDayNecessaire,
        price: '10.00',
        category: 'necessaire',
        description: 'Ideal para o dia a dia. Linda e espaçosa!',
        variationType: 'color',
        variations: []
    },
    {
        id: 'necessaire 002',
        name: 'Dupla',
        thumbnail: ThumbanailGreenDoubleNecessaire,
        price: '20.00',
        category: 'necessaire',
        description: 'Com duas divisões. Ideal para organizar seus itens!',
        variationType: 'color',
        variations: [
            {
                id: 1,
                print: 'Verde',
                img: GreenDoubleNecessaire,
                thumbnail: ThumbanailGreenDoubleNecessaire,
            },
            {
                id: 2,
                print: 'Rosa',
                img: PinkDoubleNecessaire,
                thumbnail: ThumbanailPinkDoubleNecessaire,
            }
        ]
    },
    {
        id: 'necessaire 003',
        name: 'Maletinha',
        thumbnail: BlackBriefcaseNecessaire,
        price: '35.00',
        category: 'necessaire',
        description: 'Formato de maletinha. Organização e estilo!',
        variationType: 'color',
        variations: [
            {
                id: 1,
                print: 'Preta',
                img: BlackBriefcaseNecessaire,
                thumbnail: ThumbanailBlackBriefcaseNecessaire,
            },
            {
                id: 2,
                print: 'Marrom',
                img: BrownBriefcaseNecessaire,
                thumbnail: ThumbanailBrownBriefcaseNecessaire,
            }
        ]
    },
    {
        id: 'necessaire 004',
        name: 'Porta maquiagem',
        img: MaykeupHolderNecessaire,
        thumbnail: ThumbanailMaykeupHolderNecessaire,
        price: '15.00',
        category: 'necessaire',
        description: 'Ideal para organizar sua maquiagem!',
        variationType: 'color',
        variations: []
    },
    {
        id: 'necessaire 005',
        name: 'Necessaire para viagenm ',
        img: RedTravelNecessaire,
        thumbnail: ThumbanailRedTravelNecessaire,
        price: '30.00',
        category: 'necessaire',
        description: 'Cabe tudo que você precisa!',
        variationType: 'color',
        variations: []
    },

    // Térmicos

    {
        id: 'produto-termico 001',
        name: 'Lancheira térmica executiva',
        thumbnail: ThumbanailExecutiveThermalLunchBox,
        price: '50.00',
        category: 'térmicos',
        description: 'Ideal para o trabalho ou escola!',
        variationType: 'color',
        variations: [
            {
                id: 1,
                print: 'Marrom',
                img: BrownExecutiveThermalLunchBox,
                thumbnail: ThumbanailBrownExecutiveThermalLunchBox,
            },
            {
                id: 2,
                print: 'Vermelha',
                img: RedExecutiveThermalLunchBox,
                thumbnail: ThumbanailRedExecutiveThermalLunchBox,
            }
        ]
    },
    {
        id: 'produto-termico 002',
        name: 'Lancheira térmica moderna',
        thumbnail: ThumbanailModernThermalLunchBox,
        price: '45.00',
        category: 'térmicos',
        description: 'Estampas adoráveis!',
        variationType: 'print',
        variations: [
            {
                id: 1,
                print: 'Emoji',
                img: EmoticonThermalLunchBox,
                thumbnail: ThumbanailEmoticonThermalLunchBox,
            },
            {
                id: 2,
                print: 'Banana',
                img: BananaThermalLunchBox,
                thumbnail: ThumbanailBananaThermalLunchBox,
            },
            {
                id: 3,
                print: 'Joaninha',
                img: LadyBirdThermalLunchBox,
                thumbnail: ThumbanailLadyBirdThermalLunchBox,
            }
        ]
    },
    {
        id: 'produto-termico 003',
        name: 'Porta garrafa térmico',
        thumbnail: ThumbanailThermalBottleHolder,
        price: '25.00',
        category: 'térmicos',
        description: 'Mantém sua bebida na temperatura ideal!',
        variationType: 'color',
        variations: [
            {
                id: 1,
                print: 'Preto',
                img: BlackThermalBottleHolder,
                thumbnail: ThumbanailBlackThermalBottleHolder,
            },
            {
                id: 2,
                print: 'Verde',
                img: GreenThermalBottleHolder,
                thumbnail: ThumbanailGreenThermalBottleHolder,
            }
        ]
    },
    {
        id: 'produto-termico 004',
        name: 'Lancheira térmica usual',
        thumbnail: ThumbanailBlackThermalLunchBox,
        price: '35.00',
        category: 'térmicos',
        description: 'Elegante e funcional!',
        variationType: 'color',
        variations: [
            {
                id: 1,
                print: 'Preto',
                img: BlackThermalLunchBox,
                thumbnail: ThumbanailBlackThermalLunchBox,
            },
            {
                id: 2,
                print: 'Verde',
                img: GreenThermalLunchBox,
                thumbnail: ThumbanailGreenThermalLunchBox,
            }
        ]
    },
]