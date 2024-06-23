import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const Messages = () => {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText>Messages</ThemedText>
    </ThemedView>
  );
};

export default Messages;
