export const buttonList = [
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
export const operatorList =  [
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

export const operations = {
    "/": (a,b) => a/b,
    "*": (a,b) => a*b,
    "-": (a,b) => a-b,
    "+": (a,b) => a+b
}

