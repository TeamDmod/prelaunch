import { useState } from "react"
import FAQarrow from "../../public/FAQarrow.png";

export default function FaqQuestion({ question, answer }:{question:string, answer:any}) {
    let [open, setOpen] = useState(false);

    return (
        <>
            <style jsx>{`
                .arrowDown {
                    transition: transform 1s ease-in-out;
                }
                
                .arrowUp {
                    transform: rotate(180deg);
                    transition: transform 0.25s ease-in-out;
                }

                .answeropen {
                    animation: fadeIn ease 3s;
                    word-break: break-word;
                    margin: auto;
                    width: 400px;
                }

                .answerclosed {
                    animation: fadeOut ease 3s;
                    word-break: break-all;
                }

                @keyframes fadeIn {
                    0% {
                        opacity:0;
                    }
                    100% {
                        opacity:1;
                    }
                }

                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>

            <div className="container">
                <h2 style={{wordBreak: "break-word"}}onClick={() => setOpen(!open)}>{question} <img className={open ? 'arrowDown' : 'arrowUp'} src={FAQarrow.src} width="20" alt="FAQ arrow" /></h2>

                {open && (
                    <h4 className={open ? "answeropen" : "answerclosed"} style={{color: "#fff"}}>{answer}</h4>
                )}
            </div>
            

        </>
    )
}