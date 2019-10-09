import React from 'react';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          coins: 0,
          name: "Player"
        };
        this.addCoin = this.addCoin.bind(this);
        this.changeName = this.changeName.bind(this);
        setInterval(this.addCoin, 1000);
      }
    
      changeName(event) {
        this.setState({name: event.target.value});
      }
      addCoin() {
        this.setState(state => ({
          coins: state.coins + 1
        }));
      }

      
      render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.changeName} placeholder="Enter your name"/>
                <section className="message-list">
                    <section className="message -right">
                        <div className="nes-balloon from-right">
                            <div className="nes-text is-primary">   
                            Hello {this.state.name}
                             <br />
                            You have <span className="nes-text is-success">{this.state.coins}</span> <i className="nes-icon coin is-small"></i>
                            </div>
                        </div> 
                    </section>
                    <i className="nes-charmander Perso-right"></i>
                </section>

                <section className="message-left">
                    <section className="message -left">
                        <div className="nes-balloon from-left">
                        <button className="nes-btn" onClick={this.addCoin}> Get +1<i className="nes-icon coin is-small"></i></button>
                        </div>
                    </section>
                    <i className="nes-squirtle Perso-left"></i>
                </section>
            </div>
        )
      }
  }

  

  export default Game