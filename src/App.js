import AppBar from "./components/AppBar";
import Clock from "./components/Clock";
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

            <main className="container"></main>
        </>
    );
}

export default App;
