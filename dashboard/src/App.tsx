import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Form from "./components/Form";

const MINUTE = 1000 * 60;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: 10 * MINUTE,
    },
  },
});
function App() {
  return (
    <>
      <div>
        <h1 className="header">Welcome to ADXL.AI</h1>
      </div>
      <QueryClientProvider client={queryClient}>
        <Form />
      </QueryClientProvider>
    </>
  );
}

export default App;
