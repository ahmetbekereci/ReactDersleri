import Navbar from "./components/Navbar";
import PizzaList from "./components/PizzaList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <PizzaList />
        <Footer />
      </div>
    </>
  );
}