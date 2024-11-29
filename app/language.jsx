import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import LanguageCard from "../components/LanguageCard"; // Ensure this path is correct

const programLanguages = [
  {
    id: "1",
    title: "JavaScript",
    source: require("../assets/js-logo.png"),
  },
  {
    id: "2",
    title: "Java",
    source: require("../assets/java.svg"),
  },
];

export default function LanguagesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={programLanguages}
        renderItem={({ item }) => (
          <LanguageCard title={item.title} source={item.source} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
