import { QueryClientProvider } from "@tanstack/react-query";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Form from "./components/Form";
import Details from "./components/Details";
import { queryClient } from "./Queries/fetchRepo";

function App() {
  return (
    <>
      <div>
        <h1 className="header">ADXL.AI Security Dashboard</h1>
      </div>
      <QueryClientProvider client={queryClient}>
        <Form />
        <Details />
      </QueryClientProvider>
    </>
  );
}

export default App;
