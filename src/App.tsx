import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import Page from "./page";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<main className="max-w-[650px] m-auto py-24">
				<h1 className="text-4xl mb-6">
					TanStack/React Query | React | Vite
				</h1>
				<Page />
			</main>
		</QueryClientProvider>
	);
}

export default App;
