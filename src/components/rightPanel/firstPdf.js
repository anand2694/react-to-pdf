import React from 'react'
import Pdf from "react-to-pdf";
import '../../App.css';
const ref = React.createRef();

class FirstPdf extends React.Component {
    constructor() {
        super();
        this.state = {
            userFilledData: [],
            classitem: ['col-md-4', 'col-md-4', 'col-md-4', 'col-md-12', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-md-3', 'col-12', 'col-12', 'col-12'],
            inputDefaultValue: ['Ibrahim Abdullah', 'ibra@gmail.com', '0987654321', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'MCA', '2018', 'Vit vellore', '85', 'BCA', '2015', 'Banglore University', '85', 'HSC', '2012', 'CBSE', '75', 'java,android,bootstrap,nodejs', '2712 New Delhi', 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est '],
            labels: ['Full Name', 'Email', 'Mobile', 'My Career Objective', 'Master Degree', 'Year', 'University', 'Percentage', 'Bachelors Degree', 'Year', 'University', 'Percentage', 'HighSchool Degree', 'Year', 'University', 'Percentage', 'Skill', 'Address', 'Diclaration',]
        }
    }
    renderElement() {
        return this.state.labels.map((item, i) => {
            return (
                <>
                    <div className={this.state.classitem[i]}>
                        <div className="form-group">
                            <label htmlFor={`field${i}`}>{this.state.labels[i]}</label>
                            {
                                i === 3 ? 
                                <textarea name="" id={`field${i}`} cols="30" rows="10" defaultValue={this.state.inputDefaultValue[i]}></textarea> : 
                                <input id={`field${i}`} className="form-control widthfull" type="text" defaultValue={this.state.inputDefaultValue[i]} />
                            }
                        </div>
                    </div>

                </>
            )
        })
    }

    handleSubmit() {
        let data = [];
        for (var i = 0; i < this.state.labels.length; i++) {
            data.push(document.getElementById('field' + i).value)
        }
        this.setState({
            userFilledData: data
        })
        console.log(this.state.userFilledData)
    }

    render() {
        return (
            <div>
                <div className="formfield">
                    <h3 className="pl-5 pb-4 text-info">Resume</h3>
                    <div className="container">
                        <div className="form-wrapper">
                            <div className="row">
                                {this.renderElement()}
                            </div>
                        </div>
                        <button onClick={this.handleSubmit.bind(this)} className="btn btn-info p-0">
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => <button onClick={toPdf} className="btn btn-info">Submit</button>}
                            </Pdf>
                        </button>

                    </div>
                </div>
                <div className="formpage">
                    <div className="pt-5 mt-5">
                        <div className="container formdisplay" ref={ref} >
                            <div className="row">
                                <div className="col-8">
                                    <div className="subpage ml-4">
                                        <div className="text-center">
                                            <h3>{this.state.userFilledData[0]}</h3>
                                            <p>{this.state.userFilledData[1]}</p>
                                            <p>{this.state.userFilledData[2]}</p>
                                            <p className="text-justify">
                                                {this.state.userFilledData[3]}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-info">EDUCATION</h3>
                                            <table>
                                                <tr>
                                                    <th>Degree</th>
                                                    <th>University</th>
                                                    <th>Year</th>
                                                    <th>Percentage</th>
                                                </tr>
                                                <tr>
                                                    <td>{this.state.userFilledData[4]}</td>
                                                    <td>{this.state.userFilledData[5]}</td>
                                                    <td>{this.state.userFilledData[6]}</td>
                                                    <td>{this.state.userFilledData[7]}</td>
                                                </tr>
                                                <tr>
                                                    <td>{this.state.userFilledData[8]}</td>
                                                    <td>{this.state.userFilledData[9]}</td>
                                                    <td>{this.state.userFilledData[10]}</td>
                                                    <td>{this.state.userFilledData[11]}</td>
                                                </tr>
                                                <tr>
                                                    <td>{this.state.userFilledData[12]}</td>
                                                    <td>{this.state.userFilledData[13]}</td>
                                                    <td>{this.state.userFilledData[14]}</td>
                                                    <td>{this.state.userFilledData[15]}</td>
                                                </tr>

                                            </table>
                                            <h3 className="text-info pt-3 pb-1">SKILLS</h3>
                                            <p>{this.state.userFilledData[16]}</p>


                                            <h3 className="text-info">ADDRESS</h3>
                                            <p>{this.state.userFilledData[17]}</p>

                                            <h3 className="text-info">DICLARATION</h3>
                                            <p>{this.state.userFilledData[18]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstPdf