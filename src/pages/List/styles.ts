import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const EmptyContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const EmptyText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #111;
    opacity: 0.4;
    margin-top: 20px;
`

export const Wrapper = styled.View`
    background: #fafafa;
    min-height: 200px;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const Blur = styled.View`
    background: #000;
    opacity: 0.5;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export const TextArea = styled.TextInput`
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 20px;
    padding: 10px 20px;
    background: #fafafa;
`

export const CancelButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 20px;
    opacity: 0.5;
`

export const CancelText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`