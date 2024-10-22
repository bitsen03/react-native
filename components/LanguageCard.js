import { StyleSheet, Text, View, Image } from "react-native";

export default function LanguageCard({ title, source }) {
  return (
    <View style={styles.card}>
      <View>
        <Image source={source} style={styles.img}></Image>
      </View>
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>Опыт: N лет</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    flexDirection: "row",
    gap: "20px",
    padding: "20px",
    marginBottom: "10px",
  },
  img: {
    width: "80px",
    height: "80px",
  },
});
