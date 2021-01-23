import React from "react";
import CurrencyInput from "./CurrencyInput";
import "./ExchangeForm.css";

const currencies = ["asdf", "xxx"];

const ExchangeForm = () => {
    return (
        <form className="currency-form">
            <CurrencyInput
                title="FROM"
                currencies={currencies}
                nameCurrencyInput="fromCurrency"
                nameAmountInput="fromAmount"
            />

            <CurrencyInput
                title="TO"
                currencies={currencies}
                nameCurrencyInput="toCurrency"
                nameAmountInput="toAmount"
            />
        </form>
    );
};

export default ExchangeForm;
