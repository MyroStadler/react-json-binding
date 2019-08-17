import React, { Component } from 'react';
import data from './data.js';
class GetLocalData extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: data,
            showStock: true
        };
        this.handleShowStockChange = this.handleShowStockChange.bind(this);
    }
    handleShowStockChange() {
        this.setState({
            showStock: !this.state.showStock
        });
    }
    render() {
        const {data} = this.state;
        const stockClass = this.state.showStock ? 'stock' : 'stock hidden';
        return(
            <div>
                <div>
                    <label className="inline-input" htmlFor="showStock">Show Stock</label>
                    <input
                        id="showStock"
                        type="checkbox"
                        checked={ this.state.showStock }
                        onChange={ this.handleShowStockChange } />
                </div>
                <h1>{data.label}</h1>
                    {
                        data.row.map((row, index) => (
                            <div className="row" key={index}>
                            {
                                row.locations.map(location => (
                                    <div className="location" key={location.name}>
                                        <h3>{location.name}</h3>
                                        <div className={stockClass}>
                                        {
                                            location.stock.map((item, index) => (
                                                <div className="item" key={index}>
                                                    {item.product} x{item.qty} ({item.replenishment})
                                                </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                        ))
                    }
            </div>
        );
    }
}

export default GetLocalData;