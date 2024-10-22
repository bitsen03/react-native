import { StyleSheet, Text, View, Image } from "react-native";

export default function LanguageCard({ title }) {
  return (
    <View style={styles.block}>
      <Image>
        style={styles.stretch}
        source={require("@expo/snack-static/react-native-logo.png")}
      </Image>
      <View>
        <Text>{title}</Text>
        <Text>Опыт: N лет</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
  },
  block: {},
});
