import React from "react";
import "./CurrencyInput.css";

const CurrencyInput = ({
    title,
    rates,
    nameCurrencyInput,
    nameAmountInput,
    className,
    currencyCallback,
    amountCallback,
    currencyValue,
    amountValue,
    isLoading,
    isChangeable,
}) => {
    return (
        <div className={`${className} currency-input`}>
            <h2>{title}</h2>

            <select
                value={currencyValue}
                onChange={(event) => {
                    currencyCallback(event.target.value);
                }}
                name={nameCurrencyInput}
            >
                {isLoading ? (
                    <option value=""></option>
                ) : (
                    Object.keys(rates).map((e) => (
                        <option value={e}>{e}</option>
                    ))
                )}
            </select>

            <input
                value={amountValue}
                onChange={(event) => amountCallback(event.target.value)}
                type="number"
                name={nameAmountInput}
                placeholder={!isChangeable ? "0" : "Amount"}
                disabled={!isChangeable}
            />
        </div>
    );
};

export default CurrencyInput;
