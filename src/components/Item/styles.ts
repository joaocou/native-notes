import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Container = styled.View`
    background: #fff;
    padding: 15px;
    margin: 0px 20px;
    margin-bottom: 10px;
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Wrapper = styled.View`
    flex-direction: row;
`

export const TextArea = styled.Text`
    font-size: 14px;
    margin: 12px 20px;
    color: #111;
    max-width: ${Dimensions.get('screen').width - 190}px;
`

export const CloseButton = styled.TouchableOpacity`
    padding: 10px 5px;
    border-radius: 4px;
    margin-left: 20px;
`

export const CheckButton = styled.TouchableOpacity`
    padding: 10px 5px;
    border-radius: 4px;
`