import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";
import { getRecommendationFromRecords } from "../services/recommendations";


export default function HomeScreen({ navigation, records = [] }) {
  const vehiclesCount = 12; // демо-значение автопарка
  const activeRecommendations = records.length > 0 ? 1 : 0;

  const getFleetRecommendation = () => {
    return getRecommendationFromRecords(records).text;
  };
  

  return (
    <Screen>
      <Text style={styles.title}>Fleet Overview</Text>
      <Text style={styles.subtitle}>
        Управление обслуживанием автопарка
      </Text>

      {/* Summary */}
      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>{vehiclesCount}</Text>
          <Text style={styles.summaryLabel}>Авто в парке</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>{records.length}</Text>
          <Text style={styles.summaryLabel}>Записей</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>
            {activeRecommendations}
          </Text>
          <Text style={styles.summaryLabel}>Требуют ТО</Text>
        </View>
      </View>

      {/* Vehicle demo card */}
      <Card>
        <Text style={styles.car}>Toyota Camry #12</Text>
        <Text style={styles.meta}>Пробег: 148 000 км</Text>
        <Text style={styles.meta}>Статус: в эксплуатации</Text>

        <Button
          title="Открыть автомобиль"
          onPress={() => navigation.navigate("Car")}
        />
      </Card>

      {/* Recommendation */}
      <View style={styles.recommendation}>
        <Text style={styles.recTitle}>CarBrain Recommendation</Text>
        <Text style={styles.recText}>{getFleetRecommendation()}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    color: "#9A9A9A",
    marginBottom: 24,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryValue: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "600",
  },
  summaryLabel: {
    color: "#9A9A9A",
    fontSize: 12,
  },
  car: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 6,
  },
  meta: {
    color: "#9A9A9A",
    marginBottom: 4,
  },
  recommendation: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#222",
    backgroundColor: "#0E0E0E",
  },
  recTitle: {
    color: "#FFF",
    marginBottom: 6,
    fontSize: 14,
  },
  recText: {
    color: "#9A9A9A",
    fontSize: 13,
  },
});
