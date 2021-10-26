import * as S from "./styles"
import logo from "../../assets/logo.svg"
import ReactSwitch from "react-switch";
import {FaSearch} from "react-icons/fa"
import { ThemeContext } from "styled-components";
import { useContext } from "react";

interface HeaderProps {
    toggleTheme(): void;
}

export function Header({ toggleTheme }: HeaderProps) {
    const {colors, title} = useContext(ThemeContext)

    return(
        <S.Header>
            <img src={logo} alt="Movies Master" />
            <S.Input>
                <input type="text" />
                <FaSearch/>
            </S.Input>
            <S.SecondaryNavigation>
            <S.User>
                
                </S.User>
            <ReactSwitch
                onChange={toggleTheme}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={24}
                offColor={colors.text}
                onColor={colors.background}
            />

            
            </S.SecondaryNavigation>
        </S.Header>
    );
}