import AppBar from "./components/AppBar";
import Clock from "./components/Clock";
import ExchangeForm from "./components/ExchangeForm";
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
                {/* <CurrencyInput
                    title="FROM"
                    currencies={["asdf", "xxx", "yyy"]}
                ></CurrencyInput> */}
                <ExchangeForm />
            </main>
        </>
    );
}

export default App;
