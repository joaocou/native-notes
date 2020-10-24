import React from 'react'

import { ButtonContainer, ButtonText } from './styles'

interface ButtonProps {
    children: React.ReactChildren,
    onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonText>{children}</ButtonText>
        </ButtonContainer>
    )
}

export default Button