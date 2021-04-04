import { useState } from "react";

const buttonList = [
    [
        {
            value:"C",
            className: "purple",
            type: "operator"
        },{
            value:"+/-",
            className: "purple",
            type: "operator"
        },{
            value:"%",
            className: "purple",
            type: "operator"
        }
    ],
    [
        {
            value:"7",
            className: "purple-light",
        },{
            value:"8",
            className: "purple-light",
        },{
            value:"9",
            className: "purple-light",
        }
    ],
    [
        {
            value:"4",
            className: "purple-light",
        },{
            value:"5",
            className: "purple-light",
        },{
            value:"6",
            className: "purple-light",
        }
    ],
    [
        {
            value:"1",
            className: "purple-light",
        },{
            value:"2",
            className: "purple-light",
        },{
            value:"3",
            className: "purple-light",
        }
    ],
    [
        {
            value:"0",
            className: "purple-light bottom-left-cell",
            flexBasis: "66%"
        },{
            value:".",
            className: "purple-light",
        }
    ],
]
const operatorList =  [
    {
        value:"/",
        type:"operator",
        className: "",
    },{
        value:"*",
        type:"operator",
        className: "",
    },{
        value:"-",
        type:"operator",
        className: "",
    },{
        value:"+",
        type:"operator",
        className: "",
    },{
        value:"=",
        type:"operator",
        className: "bottom-right-cell",
    }
];

const operations = {
    "/": (a,b) => a/b,
    "*": (a,b) => a*b,
    "-": (a,b) => a-b,
    "+": (a,b) => a+b
}


const Calculator = () => {

    let [operand1,setOperand1] = useState("");
    let [operand2,setOperand2] = useState("");
    let [operator,setOperator] = useState("");
    let [result,setResult] = useState(null);
    const reset = () =>{
        setOperand1("");
        setOperand2("");
        setResult(null);
        setOperator("");
    }

    const input = (item) =>{
        if(item.value === "C"){
            reset();
        }
        else if(item.value === "="){
            console.log(operations[operator](Number(operand1),Number(operand2)));
            setResult(operations[operator](Number(operand1),Number(operand2)))
        }
        else if(item.type ===  undefined && operator === ""){
            setOperand1(operand1+""+item.value)
        }
        else if(item.type ===  undefined){
            setOperand2(operand2+""+item.value)
        }
        else{
            setOperator(item.value);
        }
    }

    return(
        <div className="calculator-container">
            <div className="result-container">
                {
                    <div className={`operation ${result ? "visible" : "hidden"}`}>{operand1}{operator}{operand2}</div>
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