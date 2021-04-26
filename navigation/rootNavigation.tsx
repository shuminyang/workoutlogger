import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { RootStackParamList } from "./types"
import { WorkoutScreen } from "../components/workout"

const Stack = createStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Workout" component={WorkoutScreen} />
    </Stack.Navigator>
  )
}
