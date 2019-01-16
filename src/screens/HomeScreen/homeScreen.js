import React,  { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class homeScreen extends PureComponent {
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex: 1, backgroundColor: '#f00'}}>
                <Text> homeScreen </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Text>
                        Go to Details
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default homeScreen;
