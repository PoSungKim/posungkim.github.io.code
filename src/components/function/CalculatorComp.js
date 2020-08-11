import React from "react";
import {Table} from 'react-bootstrap';

class CalculatorComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputBox : "",
            flag : false
        }
    }
    calc = (input) => {
        if (this.state.flag === true) {
            this.setState({
                inputBox : "" + input,
                flag : false
            })
        }
        else {
            this.setState({
                inputBox : this.state.inputBox + input
            })
        }
    }
    clearCalc = () => {
        this.setState({
            inputBox : "",
            flag : false
        })
    }
    finishCalc = () => {
        try {
            this.setState({
                inputBox : eval(this.state.inputBox),
                flag : true
            })
        }catch (err) {
            alert("에러 내용 => "+ err + '\n다시 적어주세요')
            this.clearCalc()
            this.props.history.push("/functions/calculator")
        }
    }
    render() {
        return (
            <div>
                <h1>Calculator (React Only)</h1>
                <Table responsive hover variant="dark" bordered style = {{"textAlign" : "center"}}>
                    <tr style={{height: "50px", backgroundColor: "black"}} >
                        <td colSpan={"4"}>{""}{this.state.inputBox}</td>
                    </tr>
                    <tbody>
                    <tr>
                        <td onClick={ () => {this.calc(9)}}>9</td>
                        <td onClick={ () => {this.calc(8)}}>8</td>
                        <td onClick={ () => {this.calc(7)}}>7</td>
                        <td onClick={ () => {this.calc('*')}}>*</td>
                    </tr>
                    <tr>
                        <td onClick={ () => {this.calc(6)}}>6</td>
                        <td onClick={ () => {this.calc(5)}}>5</td>
                        <td onClick={ () => {this.calc(4)}}>4</td>
                        <td onClick={ () => {this.calc('+')}}>+</td>
                    </tr>
                    <tr>
                        <td onClick={ () => {this.calc(3)}}>3</td>
                        <td onClick={ () => {this.calc(2)}}>2</td>
                        <td onClick={ () => {this.calc(1)}}>1</td>
                        <td onClick={ () => {this.calc('-')}}>-</td>
                    </tr>
                    <tr>
                        <td onClick={ () => {this.calc(0)}}>0</td>
                        <td onClick={ () => {this.calc('.')}}>.</td>
                        <td onClick={ () => {this.finishCalc()}}>=</td>
                        <td onClick={ () => {this.calc('/')}}>/</td>
                    </tr>
                    <tr>
                        <td colSpan={"4"} onClick = {this.clearCalc}>Clear</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default CalculatorComp;