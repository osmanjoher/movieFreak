import "./App.css";
import Footer from "./components/Footer";
import Head from "./components/Head";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="text-4xl text-center">
      <Head />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
