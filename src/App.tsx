import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";

// states
import { AppStateProvider } from "./states/AppState";

// pages
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

//
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:pokemon" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </QueryClientProvider>
  );
}

export default App;
