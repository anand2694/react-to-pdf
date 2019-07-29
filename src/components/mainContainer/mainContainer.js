import React, { Component } from 'react';
import { directive } from '@babel/types';
import FirstPdf from '../rightPanel/firstPdf'
import SecondPdf from '../rightPanel/secondPdf'
import '../../App.css';
import logo1 from '../../image/img1.jpg';
import logo2 from '../../image/img2.jpg';
class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            togglePdf: 1
        }
    }
    handleClick(id) {
        this.setState({
            togglePdf: id
        })
    }
    render() {
        return (
            <div className="row fulliheight">
                <div className="col-md-2 col-sm-12 col-12 border-r pl-2">
                    <div onClick={this.handleClick.bind(this, 1)}>
                       <img className="ml-4 mt-3 pointer" src={logo1} width="200" height="300"/>
                    </div>
                    <div onClick={this.handleClick.bind(this, 2)}>
                        <img className="ml-4 mt-3 pointer" src={logo2} width="200" height="300" />
                    </div>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    {
                        this.state.togglePdf === 1 ? 
                            <FirstPdf /> : this.state.togglePdf === 2 ? 
                        <SecondPdf/> : null
                    }
                </div>
            </div>
        )
    }
}

export default MainContainer;