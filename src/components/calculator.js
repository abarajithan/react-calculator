import { useState,useEffect,useCallback } from "react";
import {buttonList,operations,operatorList} from '../metadata';

const Calculator = () => {

    let [operand1,setOperand1] = useState("0");
    let [operand2,setOperand2] = useState("");
    let [operator,setOperator] = useState("");
    let [result,setResult] = useState(null);
    let [previousOperation,setPreviousOperation] = useState(null);
    const reset = () =>{
        setOperand1("0");
        setOperand2("");
        setResult(null);
        setOperator("");
    }

    const input = (item) =>{
        if(item.value === "C"){
            reset();
        }
        else if(item.value === "="){
            setPreviousOperation(operand1 + operator + operand2);
            setOperand2("");
            setOperator("");
            setResult(operations[operator](Number(operand1),Number(operand2)))
        }
        else if(item.type ===  undefined && operator === ""){
            if(operand1 === "0"){
                setOperand1(item.value)
            }
            else
                setOperand1(operand1+""+item.value)
        }
        else if(item.type ===  undefined){
            setOperand2(operand2+""+item.value)
        }
        else{
            if(result){
                setOperand1(result)
                setResult(null);
            }
            setOperator(item.value);
        }
    }

    

    useEffect(() => {

        const keyPressFunction = (event) => {
            if(event.key >=0 & event.key <= 9) {
                if(operator === ""){
                    if(operand1 === "0"){
                        setOperand1(event.key)
                    }
                    else
                        setOperand1(operand1+""+event.key)
                }
                else{
                    setOperand2(operand2+""+event.key)
                }
            }
            else if(event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/'){
                if(result){
                    setOperand1(result)
                    setResult(null);
                }
                setOperator(event.key);
            }
            else if(event.keyCode === 13 || event.key === "="){
                setPreviousOperation(operand1 + operator + operand2);
                setOperand2("");
                setOperator("");
                setResult(operations[operator](Number(operand1),Number(operand2)))
            }
          };

        document.addEventListener("keydown", keyPressFunction, false);
        return () => {
          document.removeEventListener("keydown", keyPressFunction, false);
        };
      }, [operand1, operand2, operator, result, setOperator, setOperand1, setOperand2, setResult]);

    return(
        <div className="calculator-container">
            <div className="result-container">
                {
                    <div className={`operation ${result ? "visible" : "hidden"}`}>{previousOperation}</div>
                }
                <div className="result">{result ? result : operand1 + operator + operand2}</div>
            </div>
            <div className="button-container">
                <div>
                    {
                        buttonList.map((row,key) =>(
                            <div key={key} className="buttons">
                            {
                                row.map((item,index) => (
                                    <div key={key+""+index} onClick={()=>input(item)} className={item.className} style={{flexBasis: item?.flexBasis}}>{item.value}</div>
                                ))
                            }
                            </div>
                        ))
                    }
                </div>
                <div className="operation-gradient">
                    <div className="operation-buttons">
                        {
                            operatorList.map((item,key)=>(
                                <div key={key} onClick={()=>input(item)} className={item.className}>{item.value}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Calculator;