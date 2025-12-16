
import { Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";

export default function AddRecordScreen({ navigation, addRecord }) {
  const [type, setType] = useState("");
  const [mileage, setMileage] = useState("");
  const [comment, setComment] = useState("");

  return (
    <Screen>
      <Text style={styles.title}>Новая запись</Text>
      <Text style={styles.subtitle}>
        Добавьте информацию о ремонте или обслуживании
      </Text>
<Card>
  <Text style={styles.hintTitle}>Зачем это нужно?</Text>
  <Text style={styles.hintText}>
    На основе записей приложение формирует рекомендации
    и напоминает о плановом обслуживании.
  </Text>
</Card>
      <Card>
        <TextInput
  placeholder="Например: замена масла"
  placeholderTextColor="#666"
  style={styles.input}
  value={type}
  onChangeText={setType}
/>


        <Text style={styles.label}>Пробег (км)</Text>
        <TextInput
  placeholder="148000"
  placeholderTextColor="#666"
  keyboardType="numeric"
  style={styles.input}
  value={mileage}
  onChangeText={setMileage}
/>


        <Text style={styles.label}>Комментарий</Text>
        <TextInput
  placeholder="Производитель масла, сервис и т.д."
  placeholderTextColor="#666"
  style={[styles.input, styles.textarea]}
  multiline
  value={comment}
  onChangeText={setComment}
/>


        <Button
  title="Сохранить запись"
  onPress={() => {
    addRecord({
      type,
      mileage,
      comment,
      date: new Date().toLocaleDateString(),
    });
    navigation.goBack();
  }}
/>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 28,
    marginBottom: 4,
  },
  subtitle: {
    color: "#9A9A9A",
    marginBottom: 24,
  },
  label: {
    color: "#9A9A9A",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
  borderWidth: 1,
  borderColor: "#333",
  borderRadius: 12,
  padding: 12,
  color: "#FFF",
  backgroundColor: "#0E0E0E",
  marginBottom: 4,
},
  textarea: {
    height: 80,
    textAlignVertical: "top",
  },
  hintTitle: {
  color: "#FFF",
  marginBottom: 4,
},
hintText: {
  color: "#9A9A9A",
  fontSize: 13,
},

});
