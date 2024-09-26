import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./components/Users";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>TanStack/React Query | React | Vite</h1>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
