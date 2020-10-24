import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, Wrapper, TextArea, CloseButton, CheckButton } from './styles'

export interface ItemProps {
    id: string,
    content: string,
    checked: boolean,
    onCheck: () => void,
    onDelete: () => void,
}

export const Item:React.FC<ItemProps> = ({ content, checked, onDelete, onCheck }) => {

    return (
        <Container>
            <Wrapper>
                <CheckButton onPress={onCheck}>
                    { checked ? <Feather name="check-square" size={20} color="#222" /> : <Feather name="square" size={20} color="#222" /> }
                </CheckButton>
                
                <TextArea>
                    { content }
                </TextArea>
            </Wrapper>
            <CloseButton onPress={onDelete}>
                <Feather name="x" size={20} color="#999" />
            </CloseButton>
        </Container>
    )
}