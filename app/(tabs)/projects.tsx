import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmptyState } from "@/components/placeholders/EmptyState";
import { Colors } from "@/constants/colors";

// TODO: Fetch real projects from Supabase once auth is wired
interface Project {
  id: string;
  name: string;
  createdAt: string;
  status: "processing" | "done" | "failed";
}

const MOCK_PROJECTS: Project[] = []; // Will be populated from Supabase

export default function ProjectsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      {/* Header */}
      <View style={{ padding: 24, paddingBottom: 0 }}>
        <Text style={{ color: Colors.text.muted, fontSize: 11, fontWeight: "700", letterSpacing: 3, marginBottom: 6 }}>
          MY WORK
        </Text>
        <Text style={{ color: Colors.text.primary, fontSize: 26, fontWeight: "700" }}>
          Projects
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {MOCK_PROJECTS.length === 0 ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <EmptyState
              title="No projects yet"
              subtitle={"Take a photo of your room to\ncreate your first AI redesign"}
            />
          </View>
        ) : (
          // TODO: Render ProjectCard components once design is ready
          <View style={{ gap: 12 }}>
            {MOCK_PROJECTS.map((project) => (
              <View key={project.id} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
