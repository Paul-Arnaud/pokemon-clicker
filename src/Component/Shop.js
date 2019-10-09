import React from 'react';
import './Shop.css'

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
                        {this.props.coins >= 50 ? 
                        <button className="nes-btn"onClick={this.props.buyPokeball}> Buy 1 <i className="nes-pokeball shop-pokeball"></i></button> : <button className="nes-btn is-disabled" > Buy 1 <i className="nes-pokeball shop-pokeball"></i></button> }
                        <br />
                        {this.props.autoCoin ? 
                        <button className="nes-btn is-disabled shop-autoCoinPurchased">autoCoin already purchased</button>  : <button className="nes-btn" onClick={this.props.buyAutoCoin}> Buy autoCoin </button> }
                
                        </div>
                    </section>
                    <i className="nes-bulbasaur Perso-left"></i>
                </section>
            </div>
        )
    }
}

  

  export default Shop