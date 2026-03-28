import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";
import { Colors } from "@/constants/colors";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={{ flex: 1, backgroundColor: Colors.background, alignItems: "center", justifyContent: "center", padding: 24 }}>
        <Text style={{ color: Colors.primary, fontSize: 48, fontWeight: "700", marginBottom: 12 }}>404</Text>
        <Text style={{ color: Colors.text.primary, fontSize: 18, fontWeight: "600", marginBottom: 8 }}>Page not found</Text>
        <Link href="/" style={{ color: Colors.primary, fontSize: 15, marginTop: 16 }}>
          Go home
        </Link>
      </View>
    </>
  );
}
