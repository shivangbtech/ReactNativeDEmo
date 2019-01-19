import React,  { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

class loginScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { text: 'Username' };
    }


    static navigationOptions = {
        header: null
    }


    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex: 1, backgroundColor: '#952f89'}}>
                <Text> Igram </Text>

                <TextInput
                    style={{height: 40, borderColor: '#ac58a0', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Text>
                        Go to Details
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default loginScreen;
