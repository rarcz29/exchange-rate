import AppBar from "./components/AppBar";
import Clock from "./components/Clock";
import CurrencyInput from "./components/CurrencyInput";
import "./App.css";

function App() {
    return (
        <>
            <AppBar>
                <div className="topbar">
                    <h1>Exchange Rate</h1>
                    <Clock text="Current time: " />
                </div>
            </AppBar>

            <main className="container">
                <CurrencyInput
                    title="FROM"
                    currencies={["asdf", "xxx", "yyy"]}
                ></CurrencyInput>
            </main>
        </>
    );
}

export default App;
