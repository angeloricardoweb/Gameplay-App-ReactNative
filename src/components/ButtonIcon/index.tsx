import React from "react";

import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

import DiscordImg from "../../assets/discord.png";

type Props = TouchableOpacityProps & {
  title: string;
};

export default function ButtonIcon({ title, ...props }: Props) {
  return (
    <TouchableOpacity style={styles.container} 
    
    {...props}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
