import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import LanguageCard from "./components/LanguageCard";

export default function App() {
  const programLanguage = [
    {
      id: 1,
      title: "JavaScript",
      source: require("./assets/js-logo.png"),
    },
    {
      id: 2,
      title: "Java",
      source: require("./assets/java.svg"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={programLanguage}
        renderItem={({ item }) => (
          <LanguageCard title={item.title} source={item.source} />
        )}
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
});
