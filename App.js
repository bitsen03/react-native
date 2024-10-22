import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import LanguageCard from "./components/LanguageCard";

export default function App() {
  const programLanguage = [
    { id: 1, lang: "JavaScript" },
    { id: 2, lang: "Java" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={programLanguage}
        renderItem={({ item }) => <LanguageCard title={item.title} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
