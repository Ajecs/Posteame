import { Footer, Header } from "./components"
import { AllRoutes } from "./routes/AllRoutes"



function App() {
	return (
		<div className="App flex flex-col min-h-screen">
		<Header />
		<AllRoutes />
		<Footer />
		</div>
	)
}

export default App
