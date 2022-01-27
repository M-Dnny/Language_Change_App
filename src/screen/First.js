import I18n from 'i18n-js';
import { Button, StyleSheet, Text, View } from 'react-native'
import RNLanguages from 'react-native-localize'
import en from '../language/en.json'
import ar from '../language/ar.json'
import hi from '../language/hi.json'
import Second from './second';
import React from 'react';


class First extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.goTOsecond = this.goTOsecond.bind(this);
    }

    goTOsecond = () => {
        this.props.navigation.navigate(Second);
    }

    state = {
        currentLanguage: RNLanguages.language
    };

    _changeLanguage = (language) => {
        this.setState({ currentLanguage: language });
    };



    render() {
        I18n.locale = this.state.currentLanguage;
        I18n.fallbacks = true;
        I18n.translations = { en, hi, ar };

        return (
            <View style={styles.container}>
                <Text>{I18n.t('home')}</Text>
                <Text>{I18n.t('changeLan')}</Text>
                <Button title="en" onPress={() => this._changeLanguage('en')} />
                <Button title="ar" onPress={() => this._changeLanguage('ar')} />
                <Button title="hi" onPress={() => this._changeLanguage('hi')} />
                <Button title="Go TO" onPress={this.goTOsecond} />
            </View>
        );
    }
}

export default First;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});