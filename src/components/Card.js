import { View, StyleSheet } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#141414",
    borderColor: "#2A2A2A",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    
  },
});
