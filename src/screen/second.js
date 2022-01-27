import I18n from 'i18n-js';
import { Button, StyleSheet, Text, View } from 'react-native'
import RNLanguages from 'react-native-localize'
import en from '../language/en.json'
import ar from '../language/ar.json'
import hi from '../language/hi.json'
import React from 'react';


class Second extends React.Component {
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
            </View>
        );
    }
}

export default Second;

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