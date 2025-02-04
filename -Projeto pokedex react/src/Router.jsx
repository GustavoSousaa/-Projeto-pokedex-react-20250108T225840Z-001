import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App, Detalhes } from "./App";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/:nome" element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    )
}