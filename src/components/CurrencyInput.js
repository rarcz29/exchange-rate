import React from "react";
import "./CurrencyInput.css";

const CurrencyInput = ({
    title,
    currencies,
    nameCurrencyInput,
    nameAmountInput,
    className,
}) => {
    return (
        <div className={`${className} currency-input`}>
            <h2>{title}</h2>

            <select name={nameCurrencyInput}>
                {currencies.map((c) => (
                    <option value={c}>{c}</option>
                ))}
            </select>

            <input type="number" name={nameAmountInput} />
        </div>
    );
};

export default CurrencyInput;
