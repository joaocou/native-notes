import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import List from './pages/List'


const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="List" component={List} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes;