import { C1Chat } from "@thesysai/genui-sdk";
import { API_URL } from "../config";

export function Chat() {
  return (
    <C1Chat
      apiUrl={API_URL}
      agentName="C1 Assistant"
      welcomeMessage={{
        title: "Hi, I'm C1",
        description: "Ask me anything — I can generate rich UI like charts, forms, and tables.",
      }}
    />
  );
}
