import React from "react";
import {
    Text, Image, View, TouchableOpacity, TouchableOpacityProperties
} from 'react-native'

import DiscordPng  from '../../assets/discord.png';
import { styles } from "./style";

// pq ficou esse riscado?
type Props = TouchableOpacityProperties & {
    title: string;  
}

export function ButtonIcon({title, ...rest}:Props) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordPng} style={styles.icon} />
            </View>
            <Text style={styles.title}>{title}</Text>

        </TouchableOpacity>
    )
}