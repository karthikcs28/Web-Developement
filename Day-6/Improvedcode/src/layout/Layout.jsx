import Navbar from "../components/Navbar"


console.log("[LAYOUT] Layout loaded")


export default function Layout({ children }) {
return (
<div className="app">
<Navbar />
<main className="content">{children}</main>
</div>
)
}