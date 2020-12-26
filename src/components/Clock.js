import React, { useState, useEffect } from "react";

const Clock = ({ text, locales, className }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(() => new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className={className}>
            {text}
            {time.toLocaleDateString({ locales }) +
                " | " +
                time.toLocaleTimeString({ locales })}
        </p>
    );
};

export default Clock;
