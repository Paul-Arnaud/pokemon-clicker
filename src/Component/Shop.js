import React from 'react';
import cursorClick from '../../node_modules/nes.css/assets/cursor-click.png';


class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="Shop">
                <section className="message-left">
                    <section className="message -left">
                        <div className="nes-balloon from-left">
                            {this.props.coins >= 20 ? 
                                <button className="nes-btn" onClick={this.props.buyPokeball}> Buy 1 <i className="nes-pokeball shop-pokeball pokeball-small"></i><br/>for 20 <i className="nes-icon coin is-small"></i></button> : <button className="nes-btn is-disabled" > Buy 1 <i className="nes-pokeball shop-pokeball pokeball-small"></i><br/>for 20 <i className="nes-icon coin is-small"></i></button> 
                            }
                            <br />
                            {/* {this.props.coins >= 100 ? (this.props.autoCoin ? 
                                <button className="nes-btn is-disabled shop-autoCoin">autoCoin is on</button>  : <button className="nes-btn shop-autoCoin" onClick={this.props.buyAutoCoin}> Buy autoCoin <br/>for 100 <i className="nes-icon coin is-small"></i></button>) : <button className="nes-btn is-disabled shop-autoCoin">{this.props.autoCoin ? 'autoCoin is on' : 'buy autoCoin' }</button> 
                            }
                            <br /> */}
                            {this.props.coins >= 100 ?
                                <button className="nes-btn shop-autoCoin" onClick={this.props.buyClicks}>Buy 1 <img src={cursorClick}  alt="cursor-click"/><br/>for 100 <i className="nes-icon coin is-small"></i></button> 
                                : <button className="nes-btn is-disabled shop-autoCoin">Buy 1 <img src={cursorClick}  alt="cursor-click"/><br/>for 100 <i className="nes-icon coin is-small"></i></button> 
                            }
                        </div>
                    </section>
                    <i className="nes-bulbasaur Perso-left"></i>
                </section>
            </div>
        )
    }
}

  

  export default Shop