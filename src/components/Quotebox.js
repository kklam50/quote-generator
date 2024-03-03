import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

function Quotebox() {
    var quotes = [
        ["If it's free, its for me.", "Kyle Lam"],
        ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
        ["Yesterday is history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present.", "Master Oogway"],
        ["I don’t know what everyone wants me to be, I only know just how to be me", "Donkey Kong"],
        ["It's lit", "Michael \"k3soju\" Zhang "]
    ]

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [background, setBackground] = useState("");

    const changeBackground = () => {
        var bg = "#" + ((1<<24)*Math.random() | 0).toString(16);
        document.body.style.backgroundColor = bg;
        setBackground(bg);
    }

    const displayNewQuote = () => {
        var newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(newQuote[0]);
        setAuthor(newQuote[1]);
        changeBackground();
    }

    useEffect(() => {
        displayNewQuote();
    }, []);

    return (
        <div id="quote-box">
            <div class="quote-box-contents">
                <h2 id="text" style={{color: background}}>"{quote}"</h2>
                <h3 id="author"  style={{color: background}}>- {author}</h3>
                <div id="action-button-contianer"> 
                    <button id="new-quote" style={{backgroundColor: background}} onClick={displayNewQuote}>New Quote</button>
                    <div id="test">
                        <FontAwesomeIcon icon={faTwitter} />
                        <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=%22" + quote + "%22%20-%20" + author}>Tweet Quote</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quotebox;