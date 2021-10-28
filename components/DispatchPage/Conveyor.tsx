import React from "react"
import BeltItem from "./BeltItem";

type listItems = {
    name: string,
    invite: string,
    icon?:StaticImageData
    memCount:string
};

class ConveyorBelt extends React.Component {
    converyorRef: React.RefObject<HTMLUListElement>;
    listSize: number;
    listItems: Array<listItems>

    constructor(props:{listSize:number, listItems:Array<listItems>}) {
        super(props);
        this.converyorRef = React.createRef();
        this.listSize = props["listSize"];
        this.listItems = props["listItems"];
    }

    render(){
        for (let i = 0; i < this.listSize + 1; i++){
            this.converyorRef.current?.appendChild(this.converyorRef.current.children[i].cloneNode(true));
        }

        return (
            <>
                <style jsx>{`
                    .converyor-belt {
                        margin-top: 15px;
                        width: 80vw;
                        height: 20vh;
                        background-color: #333;
                        color: #fff;
                        overflow: hidden;
                        position: relative;
                        border-radius: 1rem;
                    }
                    
                    .converyor-belt:before, .converyor-belt:after {
                        position: absolute;
                        top: 0;
                        width: 10rem;
                        height: 100%;
                        content: "";
                        z-index: 1;
                      }
                    
                    .converyor-belt:before {
                        left: 0;
                        background: linear-gradient(to right, #333 0%, transparent 100%);
                    }
                    .converyor-belt:after {
                        right: 0;
                        background: linear-gradient(to left, #333 0%, transparent 100%);
                    }
                    
                    .converyor-belt-items {
                        list-style: none;
                        display: inline-flex;
                        border-radius: 12px;
                        height: 100%;
                        animation: scrolling calc(${this.listSize} * 4s) linear infinite;
                    }
                    
                    .converyor-belt-items li {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        /* text-align: center; */
                        flex-shrink: 0;
                        width: 50vw;
                        max-height: 100%;
                        font-size: calc(12vh * 3/4); 
                        white-space: nowrap;
                        margin: 25px;
                      }
                    
                    @keyframes scrolling {
                        to {left: 100%;}
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .converyor-belt {
                          animation: none;
                          text-shadow: none;
                          width: auto;
                          display: block;
                          line-height: 1.5;
                          text-align: center;
                          white-space: normal;
                        }
                      }

                    @media screen and (max-width: 800px) {
                        .converyor-belt {
                            width: 100%;
                            height: auto;
                            margin-top: 0;
                            margin-bottom: 15px;
                        }
                    
                        .converyor-belt-items {
                            display: block;
                            width: 100%;
                            height: auto;
                            margin: 0;
                        }
                `}</style>


                <div className="converyor-belt">
                    <ul id="belt-items" className="converyor-belt-items" ref={this.converyorRef}>

                        {this.listItems.map((item) => (
                            <BeltItem name={item.name} icon={item.icon} invite={item.invite} memCount={item.memCount/> 
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}

export default ConveyorBelt;