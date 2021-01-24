import React, { useState, useEffect } from "react";
import CurrencyInput from "./CurrencyInput";
import "./ExchangeForm.css";
import SwapButton from "./SwapButton";

const ExchangeForm = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [rates, setRates] = useState();
    const [fromAmount, setFromAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("");
    const [toAmount, setToAmount] = useState(0.0);
    const [toCurrency, setToCurrency] = useState("");

    useEffect(() => {
        fetch("https://api.exchangeratesapi.io/latest")
            .then((response) => response.json())
            .then((data) => {
                setRates(data.rates);
                setFromCurrency(Object.keys(data.rates)[0]);
                setToCurrency(Object.keys(data.rates)[0]);
                setIsLoading(false);
            });
    }, []);

    const handleNewData = (value) => {
        setFromAmount(value);

        if (!isLoading) {
            setToAmount(
                ((value * rates[toCurrency]) / rates[fromCurrency]).toFixed(2)
            );
        }
    };

    const handleCurrencyHange = (currency, setStateCallback) => {
        setStateCallback(currency);
        handleNewData(fromAmount);
    };

    const swapValues = () => {
        const tmpCurrency = fromCurrency;
        const tmpAmount = fromAmount;
        setFromAmount(toAmount);
        setFromCurrency(toCurrency);
        setToAmount(tmpAmount);
        setToCurrency(tmpCurrency);
    };

    return (
        <div className="currency-form">
            <CurrencyInput
                className="data-input"
                title="FROM"
                rates={rates}
                nameCurrencyInput="fromCurrency"
                nameAmountInput="fromAmount"
                currencyCallback={(value) =>
                    handleCurrencyHange(value, setFromCurrency)
                }
                amountCallback={handleNewData}
                currencyValue={fromCurrency}
                amountValue={fromAmount}
                isLoading={isLoading}
                isChangeable
            />

            <SwapButton swapValuesCallback={swapValues}></SwapButton>

            <CurrencyInput
                className="data-input"
                title="TO"
                rates={rates}
                nameCurrencyInput="toCurrency"
                nameAmountInput="toAmount"
                currencyCallback={(value) =>
                    handleCurrencyHange(value, setToCurrency)
                }
                amountCallback={setToAmount}
                currencyValue={toCurrency}
                amountValue={toAmount}
                isLoading={isLoading}
            />
        </div>
    );
};

export default ExchangeForm;
