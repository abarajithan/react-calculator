const buttonList = [
    [
        {
            value:"C",
            className: "purple",
        },{
            value:"+/-",
            className: "purple",
        },{
            value:"%",
            className: "purple",
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
const Calculator = () => {
    return(
        <div className="calculator-container">
            <div className="result-container">
                <div className="operation">65x20</div>
                <div className="result">56422</div>
            </div>
            <div className="button-container">
                <div>
                    {
                        buttonList.map((row,key) =>(
                            <div key={key} className="buttons">
                            {
                                row.map((item,index) => (
                                    <div key={key+""+index}className={item.className} style={{flexBasis: item?.flexBasis}}>{item.value}</div>
                                ))
                            }
                            </div>
                        ))
                    }
                </div>
                <div className="operation-gradient">
                    <div className="operation-buttons">
                        <div>/</div>
                        <div>*</div>
                        <div>-</div>
                        <div>+</div>
                        <div className="bottom-right-cell">=</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Calculator;