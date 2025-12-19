import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import CarScreen from "./src/screens/CarScreen";
import AddRecordScreen from "./src/screens/AddRecordScreen";

import * as api from "./src/services/api";


const Stack = createNativeStackNavigator();

export default function App() {
  const [records, setRecords] = useState(api.getRecords());

  const addRecord = (record) => {
    api.addRecord(record);
    setRecords(api.getRecords());
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
