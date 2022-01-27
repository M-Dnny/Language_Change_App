import React, { useEffect } from 'react';
import { Button, I18nManager, Text, View, } from 'react-native'
import strings from '../components/i18n'
import { getLng, setLng } from '../language/changeLng';
import RNRestart from 'react-native-restart';



function Home() {

    useEffect(() => {
        selectedLng();
    })

    const selectedLng = async () => {
        const lngData = await getLng()
        if (!!lngData) {
            strings.setLanguage(lngData)
        }
        console.log('Lang data ==>>', lngData)
    }

    const onChangeLang = async (lng) => {
        if (lng === 'en') {
            await I18nManager.forceRTL(false)
            setLng('en')
            RNRestart.Restart()
            return;
        }
        if (lng === 'hi') {
            await I18nManager.forceRTL(false)
            setLng('hi')
            RNRestart.Restart()
            return;
        }
        if (lng === 'ar') {
            await I18nManager.forceRTL(true)
            setLng('ar')
            RNRestart.Restart()
            return;
        }
    }

    return (
        <View >
            <Text style={{ fontSize: 40 }}>
                {strings.home}
            </Text>
            <Text style={{ fontSize: 40 }}>
                {strings.changeLan}
            </Text>

            <Button
                onPress={() => onChangeLang('en')}
                title='For ENG'
            />
            <Button
                onPress={() => onChangeLang('ar')}
                title='For AR'
            />
            <Button
                onPress={() => onChangeLang('hi')}
                title='For Hindi'
            />
        </View>
    )

}


export default Home;