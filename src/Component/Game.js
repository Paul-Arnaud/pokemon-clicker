import React from 'react';
import Shop from './Shop';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          coins:  cookies.get('coin') ? Number.parseInt(cookies.get('coin'), 10) : 0, 
          pokeballs: cookies.get('pokeballs') ? Number.parseInt(cookies.get('pokeballs'), 10) : 0,
          name: cookies.get('name') ? cookies.get('name') : "Player",
        //   autoCoin: cookies.get('autoCoin') === 'true' ? true : false, 
          coinsShow : 0,
          numberOfClicks: 1
        };
        setInterval(this.coinsShowFunc,1);
        // setInterval(this.autoCoinFunc, 1000);
        setInterval(this.pokeballAddCoin, 2000);
        setInterval(this.saveCookies, 5000);
    }

    coinsShowFunc = () => {
        if (this.state.coins < 1000) {
            this.setState({
                coinsShow: this.state.coins        
            }); 
        }
        else if (this.state.coins < 1000000) {
            this.setState({
                coinsShow: (this.state.coins/1000).toFixed(2)+'K'      
            });
        }
        else if(this.state.coins < 1000000000) {
            this.setState({
                coinsShow: (this.state.coins/1000000).toFixed(2)+'M'      
            });
        }
        else if(this.state.coins < 1000000000000) {
            this.setState({
                coinsShow: (this.state.coins/1000000000).toFixed(2)+'B'      
            });
        }
        else {
            this.setState({
                coinsShow: (this.state.coins/1000000000000).toFixed(2)+'T'   
            });
        }
    }
    saveCookies = () => {
        cookies.set('coin', this.state.coins, { path: '/' });
        cookies.set('pokeballs', this.state.pokeballs, { path: '/' });
        cookies.set('name', this.state.name, { path: '/' });
        // cookies.set('autoCoin', this.state.autoCoin, { path: '/' });
    }
    restart = () => {
        this.setState({
            name: 'Player',
            coins: 0,
            pokeballs: 0,
            // autoCoin: false,
            numberOfClicks: 1          
    }); 
    }
    changeName = (event) =>  {
        this.setState({name: event.target.value});
    }
    addCoin = () => {
        this.setState(state => ({
          coins: state.coins + this.state.numberOfClicks
        }));
    }
    removeCoin = (value) => {
        this.setState(state => ({
          coins: state.coins - value
        }));
    }
    buyClicks = () => {
        this.addOneClick();
        this.removeCoin(100);
    }
    addOneClick = () =>{
        this.setState(state => ({
            numberOfClicks: state.numberOfClicks + 1
          }));
    }
    addPokeball= () => {
        this.setState(state => ({
            pokeballs: state.pokeballs + 1
        }));
    }
    buyPokeball = () => {
        this.addPokeball()
        this.removeCoin(20)
    }
    pokeballAddCoin = () => {
        for (let i=0; i < this.state.pokeballs; i++) {
            this.addCoin();
        }
    }
    // buyAutoCoin = () => {
    //     this.setState(state => ({
    //         autoCoin: state.autoCoin = true
    //     }));
    //     this.removeCoin(100)
    // }
    // autoCoinFunc = () => {
    //     if(this.state.autoCoin) {
    //         this.addCoin();
    //     }
    // }
      
    render() {
        return (
            <div>
                <div className="Game-menu">
                    <span className="nes-text is-success nes-pointer" onClick={this.saveCookies}>SAVE GAME</span>
                    <span className="restart nes-text is-error nes-pointer" onClick={this.restart}>RESTART GAME</span>
                </div>
                <Shop coins={this.state.coins} buyPokeball={this.buyPokeball} buyClicks={this.buyClicks} autoCoin={this.state.autoCoin}/>
                <input className="nes-input name-field" onChange={this.changeName} placeholder="Enter your name"/>
                <br /><br />
                <section className="message-list">
                    <section className="message -right">
                        <div className="nes-balloon from-right">
                            <div className="nes-text is-primary">   
                            Hello {this.state.name}
                             <br />
                            You have <span className="nes-text is-warning">{this.state.coinsShow}</span> <i className="nes-icon coin is-small"></i><br /> and <span className="nes-text is-error">{this.state.pokeballs} Pokeballs</span> 
                            </div>
                        </div> 
                    </section>
                    <i className="nes-charmander Perso-right"></i>
                </section>

                <section className="message-left">
                    <section className="message -left">
                        <div className="nes-balloon from-left">
                        <button className="nes-btn" onClick={this.addCoin}> Get +{this.state.numberOfClicks}<i className="nes-icon coin is-small"></i></button>
                        </div>
                    </section>
                    <i className="nes-squirtle Perso-left"></i>
                </section>
            </div>
        )
    }
}

  

  export default Game