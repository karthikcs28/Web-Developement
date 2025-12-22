import { createContext, useContext, useState } from "react"
const AppContext = createContext()
export function AppProvider({ children }) {
const [projects, setProjects] = useState([
{ id: 1, title: "Fake News Detection", tech: "BERT + BiGRU" },
{ id: 2, title: "GrainPalette", tech: "CNN + MobileNet" },
{ id: 3, title: "Student Depression Detection", tech: "ML" }
])
return (
<AppContext.Provider value={{ projects, setProjects }}>
{children}
</AppContext.Provider>
)
}
export const useApp = () => useContext(AppContext)