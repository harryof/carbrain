import { View, Text, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";
import { getRecommendationFromRecords } from "../services/recommendations";


export default function CarScreen({ navigation, records = [] }) {
  const mileage = "148 000 км";

  const getVehicleRecommendation = () => {
    return getRecommendationFromRecords(records).text;
  };
  

  return (
    <Screen>
      <Text style={styles.title}>Toyota Camry #12</Text>
      <Text style={styles.subtitle}>Статус: в эксплуатации</Text>

      {/* Vehicle info */}
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Пробег</Text>
        <Text style={styles.infoValue}>{mileage}</Text>
      </View>

      {/* Records */}
      <Text style={styles.section}>История обслуживания</Text>

      {records.length === 0 ? (
        <Text style={styles.empty}>Записей пока нет</Text>
      ) : (
        <FlatList
          data={records}
          keyExtractor={(_, i) => String(i)}
          renderItem={({ item }) => (
            <Card>
              <Text style={styles.recordTitle}>{item.type}</Text>
              <Text style={styles.recordMeta}>
                Пробег: {item.mileage || "—"} км
              </Text>
              <Text style={styles.recordMeta}>
                Дата: {item.date}
              </Text>
            </Card>
          )}
        />
      )}

      {/* Recommendation */}
      <View style={styles.recommendation}>
        <Text style={styles.recTitle}>CarBrain Recommendation</Text>
        <Text style={styles.recText}>{getVehicleRecommendation()}</Text>
      </View>

      <Button
        title="Добавить запись"
        onPress={() => navigation.navigate("AddRecord")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    color: "#9A9A9A",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  infoLabel: {
    color: "#9A9A9A",
  },
  infoValue: {
    color: "#FFF",
    fontWeight: "500",
  },
  section: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 12,
  },
  empty: {
    color: "#666",
    marginBottom: 16,
  },
  recordTitle: {
    color: "#FFF",
    fontSize: 15,
    marginBottom: 4,
  },
  recordMeta: {
    color: "#9A9A9A",
    fontSize: 12,
  },
  recommendation: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#222",
    backgroundColor: "#0E0E0E",
    marginBottom: 16,
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
