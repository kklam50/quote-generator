import React from 'react';

class Quotebox extends React.Component {
    constructor(props) {
        super(props);
        this.quotes = [
            ["If it's free, its for me.", "Kyle Lam"],
            ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
            ["Yesterday is history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present.", "Master Oogway"],
            ["I don’t know what everyone wants me to be, I only know just how to be me", "Donkey Kong"],
            ["It's lit", "Michael \"k3soju\" Zhang "]
        ]
        var newQuote = this.getNewQuote();
        this.state = {
            quote: newQuote[0],
            author: newQuote[1]
        }
        this.displayNewQuote = this.displayNewQuote.bind(this);
    }

    componentDidMount() {
        this.changeBackground();
    }

    getNewQuote() {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }

    displayNewQuote() {
        var newQuote = this.getNewQuote();
        this.setState({
            quote: newQuote[0],
            author: newQuote[1]
        })
        this.changeBackground();
    }

    changeBackground() {
        let background = "#" + ((1<<24)*Math.random() | 0).toString(16);
        document.body.style.backgroundColor = background;
        this.setState({background});
    }

    render() {
        return (
            <div id="quote-box">
                <div class="quote-box-contents">
                    <h3 id="text" style={{color: this.state.background}}>"{this.state.quote}"</h3>
                    <h5 id="author"  style={{color: this.state.background}}>- {this.state.author}</h5>
                    <div id="action-button-contianer"> 
                        <button id="new-quote" onClick={this.displayNewQuote}>New Quote</button>
                        <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=%22" + this.state.quote + "%22%20-%20" + this.state.author}>Tweet Quote</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quotebox;