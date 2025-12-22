import { createContext, useContext, useState } from "react"


const AppContext = createContext()


export function AppProvider({ children }) {
console.log("[CONTEXT] AppProvider mounted")


const [projects] = useState([
{ id: 1, title: "Fake News Detection", tech: "BERT + BiGRU" },
{ id: 2, title: "GrainPalette", tech: "CNN + MobileNet" },
{ id: 3, title: "Student Depression Analysis", tech: "Machine Learning" }
])


return (
<AppContext.Provider value={{ projects }}>
{children}
</AppContext.Provider>
)
}


export const useApp = () => {
console.log("[CONTEXT] useApp hook used")
return useContext(AppContext)
}