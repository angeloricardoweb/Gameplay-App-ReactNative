import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { styles } from "./style";
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/ButtonIcon";
export function Signin() {


    return (
        <View style={styles.container}>
            <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            
            />
            <Image 
            source={IllustrationImg} 
            style={styles.image} 
            resizeMode='stretch'
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize suas{`\n`} jogatinas{`\n`} facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie Grupos para jogar seus games {`\n`} favoritos para seus amigos
                </Text>
                <ButtonIcon title="Entrar com Discord" activeOpacity={0.5}/>

            </View>

        </View>
    )
}