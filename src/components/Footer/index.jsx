import { Footer } from "./styles"

import { FaInstagram, FaFacebook } from "react-icons/fa";

function DefaultFooter() {
    const anotherTab = (url) => {
        window.open(url, '_blank')
    }

    return (
        <Footer>
            <p>© 2025 Loja Dona Ge. Todos os direitos reservados</p>

            <div>
                <h3>Redes sociais</h3>

                <ul>
                    <li>
                        <button onClick={() => anotherTab('https://www.instagram.com/genildasilva75/')} type='button'> <FaInstagram /> </button>
                    </li>

                    <li>
                        <button onClick={() => anotherTab('https://www.facebook.com/genilda.samuel?locale=pt_BR')} type='button'> <FaFacebook /> </button>
                    </li>
                </ul>
            </div>
        </Footer>
    )
}

export default DefaultFooter