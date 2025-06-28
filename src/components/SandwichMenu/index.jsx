import {
    Menu,
    MenuItem,
    SandwichContainer,
    SandwichIcon
} from "./styles";

import { IoIosMenu, IoMdClose } from "react-icons/io";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SandwichMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const toogleMenu = () => setIsOpen(prev => !prev)

    const handleNavigation = (path) => {
        navigate(path)
        setIsOpen(false)
    }

    return (
        <SandwichContainer>
            <SandwichIcon onClick={toogleMenu} type="button">
                {isOpen ? <IoMdClose /> : <IoIosMenu />}
            </SandwichIcon>

            <Menu $open={isOpen}>
                <MenuItem onClick={() => handleNavigation('/')}>Início</MenuItem>
                <MenuItem onClick={() => handleNavigation('/sobre-nos')}>Sobre</MenuItem>
                <MenuItem onClick={() => handleNavigation('/produtos')}>Produtos</MenuItem>
                <MenuItem onClick={() => handleNavigation('/carrinho')}>Carrinho</MenuItem>
            </Menu>
        </SandwichContainer>
    )
}

export default SandwichMenu