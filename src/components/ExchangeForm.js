import React, { useState, useEffect } from "react";
import styles from "./ExchangeForm.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const ExchangeForm = () => {
    const [loading, setLoading] = useState(true);
    const [currencies, setCurrencies] = useState("");
    const [fromInput, setFromInput] = useState();
    const [fromCurrency, setFromCurrency] = useState("");
    const [toInput, setToInput] = useState();
    const [toCurrency, setToCurrency] = useState();

    useEffect(() => {
        fetch("https://api.exchangeratesapi.io/latest")
            .then((response) => response.json())
            .then((data) => {
                setCurrencies(Object.keys(data.rates));
                setLoading(false);
            });
    }, []);

    const handleSubmit = (event) => {
        fetch(
            `https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`
        )
            .then((response) => response.json())
            .then(
                (data) => console.log(fromInput * data.rates[toCurrency])
                // setToInput(
                //     Math.round(
                //         fromInput * parseInt(data.rates[toCurrency]),
                //         "e+2"
                //     )
                // )
            );
        event.preventDefault();
    };

    return (
        <section className={styles.exchangeForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                    <section>
                        <div>
                            <select
                                onChange={(event) => {
                                    setFromCurrency(event.target.value);
                                }}
                            >
                                {loading ? (
                                    <option value=""></option>
                                ) : (
                                    currencies.map((e) => (
                                        <option value={e}>{e}</option>
                                    ))
                                )}
                            </select>
                            {/* <InputLabel id="demo-simple-select-outlined-label">
                                From
                            </InputLabel>
                            <Select
                                label="From"
                                value=""
                                // onChange={(event) => {
                                //     setFromCurrency(event.target.value);
                                // }}
                            >
                                {loading ? (
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                ) : (
                                    currencies.map((currency) => (
                                        <MenuItem
                                            key={currency}
                                            value={currency}
                                        >
                                            <em>{currency}</em>
                                        </MenuItem>
                                    ))
                                )}
                            </Select> */}
                        </div>
                        <div>
                            <TextField
                                type="number"
                                label="From"
                                variant="outlined"
                                value={fromInput}
                                onChange={(event) =>
                                    setFromInput(event.target.value)
                                }
                                inputProps={{
                                    min: "0",
                                    step: ".01",
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </section>

                    <Button variant="contained" color="primary">
                        Swap
                    </Button>

                    <section>
                        {/* <div>
                            <InputLabel id="demo-simple-select-outlined-label">
                                From
                            </InputLabel>
                            <Select label="From" value={toCurrency}>
                                {loading ? (
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                ) : (
                                    currencies.map((currency) => (
                                        <MenuItem value="currency">
                                            <em>{currency}</em>
                                        </MenuItem>
                                    ))
                                )}
                            </Select>
                        </div> */}
                        <div>
                            <select
                                onChange={(event) => {
                                    setToCurrency(event.target.value);
                                }}
                            >
                                {loading ? (
                                    <option value=""></option>
                                ) : (
                                    currencies.map((e) => (
                                        <option value={e}>{e}</option>
                                    ))
                                )}
                            </select>
                        </div>

                        <div>
                            <TextField
                                type="number"
                                label="Amount"
                                variant="outlined"
                                value={toInput}
                                onChange={(event) =>
                                    setToInput(event.target.value)
                                }
                                inputProps={{
                                    min: "0",
                                    step: ".01",
                                }}
                            />
                        </div>
                    </section>
                </div>

                <Button
                    className={styles.submitBt}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </section>
    );
};

export default ExchangeForm;
