import { Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";

export default function CarScreen({ navigation }) {
  return (
    <Screen>
      <Text style={styles.title}>Toyota Camry</Text>
      <Card>
  <Text style={styles.section}>Состояние автомобиля</Text>

  <Text style={styles.statusOk}>● В норме: двигатель</Text>
  <Text style={styles.statusWarn}>● Требует внимания: масло</Text>
</Card>
      <Card>
        <Text style={styles.badge}>Рекомендация</Text>
        <Text style={styles.warning}>
          Рекомендуется замена масла
        </Text>

        <Button
          title="Добавить запись"
          onPress={() => navigation.navigate("AddRecord")}
        />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 28,
    marginBottom: 24,
  },
  label: {
    color: "#9A9A9A",
    marginBottom: 8,
  },
  warning: {
    color: "#FFF",
    fontSize: 18,
  },
  section: {
  color: "#9A9A9A",
  marginBottom: 8,
},
statusOk: {
  color: "#AAA",
  marginBottom: 4,
},
statusWarn: {
  color: "#FFF",
  fontWeight: "500",
},
badge: {
  alignSelf: "flex-start",
  backgroundColor: "#1E1E1E",
  color: "#FFF",
  paddingHorizontal: 12,
  paddingVertical: 4,
  borderRadius: 12,
  marginBottom: 8,
  fontSize: 12,
},


});
