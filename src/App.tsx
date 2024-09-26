import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import Users from "./components/Users";
import { queryClient } from "./react-query";
import UserAdd from "./components/UserAdd";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>TanStack/React Query | React | Vite</h1>
      <Users />
      <UserAdd />
    </QueryClientProvider>
  );
}

export default App;
