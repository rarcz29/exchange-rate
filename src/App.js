import Container from "@material-ui/core/Container";
import AppBar from "./components/AppBar";
import Clock from "./components/Clock";
import "./App.scss";

function App() {
    return (
        <Container>
            <AppBar contentMargin="2rem 1rem">
                <div className="flex-vertical app-bar-left">
                    <h1>Exchange Rate</h1>
                    <Clock text="Current time: " />
                </div>
                <div className="flex-vertical app-bar-right">
                    <h2>Service status</h2>
                    <p>some data</p>
                </div>
            </AppBar>

            <main>
                <section>
                    <div></div>
                    <div></div>
                </section>
            </main>
        </Container>
    );
}

export default App;
