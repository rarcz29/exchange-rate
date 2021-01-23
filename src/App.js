import AppBar from "./components/AppBar";
import Clock from "./components/Clock";
import ExchangeForm from "./components/ExchangeForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <AppBar>
                <div className="topbar">
                    <h1>Exchange Rates</h1>
                    <Clock text="Current time: " />
                </div>
            </AppBar>

            <main className="container">
                <ExchangeForm />
            </main>

            <Footer></Footer>
        </>
    );
}

export default App;
