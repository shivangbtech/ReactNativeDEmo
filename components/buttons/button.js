import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from "prop-types";

const button = ({containerStyle, textStyle, value})=>{

    return(
        <View>
            <TouchableOpacity onPress={()=>{}}>


                <Text> Touch Here </Text>

            </TouchableOpacity>
        </View>
    );
}


/*index.propTypes = {
    containerStyle : PropTypes.StyleSheet.isRequired
};*/


export default button;