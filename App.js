import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import CarScreen from "./src/screens/CarScreen";
import AddRecordScreen from "./src/screens/AddRecordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    setRecords((prev) => [...prev, record]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} records={records} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Car">
          {(props) => (
            <CarScreen {...props} records={records} />
          )}
        </Stack.Screen>

        <Stack.Screen name="AddRecord">
          {(props) => (
            <AddRecordScreen
              {...props}
              addRecord={addRecord}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
