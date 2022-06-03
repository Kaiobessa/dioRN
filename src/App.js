import React from 'react'
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking,

    } from 'react-native'
const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/84423990?v=4'

const urlToMyGithub = 'https://github.com/Kaiobessa';

const App = ()=>{

    const handlePressGoToGithub = async () =>{
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        
        if(res){console.log('Link aprovado');
                console.log('Abrindo link....');
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
        <View style={style.content}>
            <Image
            accessibilityLabel="Kaio com fundo branco" 
            style={style.avatar} 
            source={{uri: imageProfileGithub }}/>
            <Text 
            accessibilityLabel="Nome: Kaio Bessa"
            style={[style.defaultText, style.name]}>Kaio Bessa
            </Text>
            <Text 
            accessibilityLabel="Nickname: Kaiobessa"
            style={[style.defaultText, style.nickname]}>Kaiobessa
            </Text> 
            <Text 
            accessibilityLabel="Descrição: Analysis and Development Student | HTML | CSS | JavaScript | React Native | UX"
            style={[style.defaultText, style.description]}>Systems Analysis and Development Student | HTML | CSS | JavaScript | React Native | UX
            </Text>
            <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
                Open in Github
                </Text>
            </View>     
            </Pressable>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontSize: 16,
        fontWeight: 'bold',
    },
});