import React from 'react';
import './MovingGifPage.css';

class MovingGifPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        noCount: 0,
        yesPressed: false,
        gifSrc: '/Poke.gif'
      };
    }
  
    handleYesClick = () => {
      this.setState({ 
        yesPressed: true,
        gifSrc: '/Kissies.png'
      });
    };
  
    handleNoClick = () => {
      this.setState(prevState => ({
        noCount: prevState.noCount + 1,
      }));
    };

  getNoButtonText = () => {
    const phrases = [
      "No",
      "HUH? WHY? Think again..",
      "Please..??",
      "Pretty pretty please",
      "With a cherry on top?",
      "What about a strawberry..?",
      "STOP SAYING NO",
      "Why do you hate me? >:'(",
      "AMOUR PLEASE",
      "WEHHH STOP",
      "You're killing me..",
      "Quit twisting the knife pls",
      ":((((",
      "I BEG YOU",
      "Okay you win, I'm dead",
      "Please reconsider?",
      "Last chance to say yes!",
      "You're breaking my heart TnT",
      "You're not allowed to say No!!",
      "I won't give up.",
      "No :(",
    ];

    return phrases[Math.min(this.state.noCount, phrases.length - 1)];
  };

  render() {
    const yesButtonSize = this.state.noCount * 20 + 16; // This will set the initial size and increase with 'noCount'
    
    return (
      <div className="main-container">
        <img
          src={this.state.gifSrc}
          alt="gif"
          className="gif"
        />
        {this.state.yesPressed ? (
          <p className="message">YAYAYAYAY!! I can't wait to spend today with you ^^!</p>
        ) : (
          <>
            <p className="question">Will you be my Valentine?</p>
            <div className="button-container">
              <button
                className="yes-button"
                style={{ fontSize: `${yesButtonSize}px` }}
                onClick={this.handleYesClick}
              >
                Yes
              </button>
              <button
                className="no-button"
                onClick={this.handleNoClick}
              >
                {this.state.noCount === 0 ? "No" : this.getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MovingGifPage;