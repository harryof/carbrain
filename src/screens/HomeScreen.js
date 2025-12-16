
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation, records }) {
  const getRecommendation = () => {
  if (records.length === 0) {
    return "Добавьте первую запись, чтобы CarBrain начал анализ состояния автомобиля.";
  }

  const lastRecord = records[records.length - 1];

  if (
    lastRecord.type &&
    lastRecord.type.toLowerCase().includes("масло")
  ) {
    return "Рекомендуется проверить уровень масла через 8 000 км.";
  }

  if (lastRecord.mileage && Number(lastRecord.mileage) > 150000) {
    return "Автомобиль с большим пробегом — рекомендуется диагностика ходовой части.";
  }

  return "Автомобиль в норме. Продолжайте вести журнал обслуживания.";
};

  return (
    <Screen>
      <Text style={styles.title}>CarBrain</Text>
      <Text style={styles.subtitle}>управдение обслуживанием автопарка</Text>
      <View style={styles.hero}>
  <Text style={styles.heroTitle}>Мой автомобиль</Text>
  <Text style={styles.heroSubtitle}>
    Сводка и рекомендации по состоянию
  </Text>
</View>

      <View style={styles.summary}>
  <View style={styles.summaryItem}>
    <Text style={styles.summaryValue}>1</Text>
    <Text style={styles.summaryLabel}>Автов парке</Text>
  </View>

  <View style={styles.summaryItem}>
    <Text style={styles.summaryValue}>{records.length}</Text>
    <Text style={styles.summaryLabel}>Записей</Text>
  </View>

  <View style={styles.summaryItem}>
    <Text style={styles.summaryValue}>2</Text>
    <Text style={styles.summaryLabel}>Рекомендации</Text>
  </View>
</View>
      <Card>
        <Text style={styles.car}>Toyota Camry</Text>
        <Text style={styles.meta}>Пробег: 148 000 км</Text>
        <Text style={styles.meta}>Последнее ТО: 10 000 км назад</Text>

        <Button
          title="Открыть автомобиль"
          onPress={() => navigation.navigate("Car")}
        />
      </Card>
      {records.length === 0 ? (
  <Text style={styles.empty}>
    Записей пока нет. Добавьте первую запись.
  </Text>
) : (
  records.map((item, index) => (
    <Card key={index}>
      <Text style={styles.recordTitle}>{item.type}</Text>
      <Text style={styles.recordMeta}>
        Пробег: {item.mileage} км
      </Text>
      {item.comment ? (
        <Text style={styles.recordText}>{item.comment}</Text>
      ) : null}
    </Card>
  ))
)}

      <View style={styles.recommendation}>
  <Text style={styles.recommendationLabel}>
    Рекомендация CarBrain
  </Text>
  <Text style={styles.recommendationText}>
    {getRecommendation()}
  </Text>
</View>


    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    color: "#9A9A9A",
    marginBottom: 24,
  },
  car: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 8,
  },
  meta: {
    color: "#9A9A9A",
    marginBottom: 4,
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
hero: {
  backgroundColor: "#0E0E0E",
  borderRadius: 20,
  padding: 20,
  marginBottom: 24,
  borderWidth: 1,
  borderColor: "#222",
},
heroTitle: {
  color: "#FFF",
  fontSize: 18,
  marginBottom: 4,
},
heroSubtitle: {
  color: "#9A9A9A",
  fontSize: 13,
},
footerHint: {
  marginTop: 24,
  padding: 16,
  borderTopWidth: 1,
  borderColor: "#222",
},
footerText: {
  color: "#666",
  fontSize: 12,
  textAlign: "center",
},
empty: {
  color: "#666",
  textAlign: "center",
  marginTop: 24,
  fontSize: 13,
},
recordTitle: {
  color: "#FFF",
  fontSize: 16,
  marginBottom: 4,
},
recordMeta: {
  color: "#9A9A9A",
  fontSize: 12,
  marginBottom: 4,
},
recordText: {
  color: "#CCC",
  fontSize: 13,
},
recommendation: {
  marginTop: 24,
  padding: 16,
  backgroundColor: "#0E0E0E",
  borderRadius: 16,
  borderWidth: 1,
  borderColor: "#222",
},
recommendationLabel: {
  color: "#9A9A9A",
  fontSize: 12,
  marginBottom: 4,
},
recommendationText: {
  color: "#FFF",
  fontSize: 14,
},





});
