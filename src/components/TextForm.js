import React, {useState} from 'react'
import PropTypes from 'prop-types'
// Declare a new state variable, which we'll call "count"

export default function TextForm(props) {
    const handleUpClick = ()=> {
        //console.log("up click");
        setText(text.toLocaleUpperCase());
        props.set_Alert("Converted to uppercase successfully!", "success");
    }
    const handleOnClick = (event)=> {
        //.log("on Change");
        setText(event.target.value);
        const punct = "!,;.-?'";
        let count = 0;
        for(let i = 0; i < text.length; i++){
            if(!punct.includes(text[i])){
            continue;
            };
            count++;
        };
        setCount(count);

        let txt = text + " ";
        const sentenceCount = txt.split(". ").length - 1;
        setSentenceCount(sentenceCount);
        console.log(sentenceCount);
    }
    const handleDownClick = ()=> {
        setText(text.toLocaleLowerCase());
        props.set_Alert("Converted to lowercase successfully!", "success");
    };
    const handleClearClick = (event)=> {
        setText(" ")
        setCount(0)
        setSentenceCount(0);
        props.set_Alert("Cleared the text successfully!", "success");
    }  
    const handleCopy = () => {
        let text = document.getElementById("myTextArea")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.set_Alert("Copy the text successfully!", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.set_Alert("Removed the extra spaceses successfully!", "success");
    };
    const [text, setText] = useState(" ");
    const [count, setCount] = useState(0);
    const[sentenceCount, setSentenceCount] = useState(0);
    return (
        <>
        <table className={`table table-${props.mode} table-striped`} >
            <thead>
                <tr>
                    <th scope="col">Character</th>
                    <th scope="col">Words</th>
                    <th scope="col">Space</th>
                    <th scope="col">Punctuations</th>
                    <th scope="col">Sentences</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">{text.length}</th>
                <th>{text.split(' ').length }</th>
                <th>{text.split(' ').length - 1}</th>
                <th>{count}</th>
                <th>{sentenceCount}</th>
                </tr>
            </tbody>  
        </table>       
            <div className='container' style={{color: props.mode === 'light'? 'white': '#084c98ddd'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    <textarea className={`form-control my-4 bg-${props.mode} text-${props.mode === 'light'? 'dark': 'light'}`} style={{backgroundColor: props.mode === 'light'? 'black': 'white'}} id="myTextArea" value={text} onChange={handleOnClick} rows="8"></textarea> 
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowerercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove ExtraSpace</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light'? 'white': 'black'}}>
                <h2>Your text summary</h2>
                <p>
                <b>{text.trim().length > 0 ?text.trim().split(/\s+/).length: 0} </b>words and <b>{text.trim().length}</b> character
                </p>
                <p>
                    How long does it take to read <b>{text.split(' ').length }</b> words?	<b>{0.008 * text.split(' ').length }</b> minutes
                </p>
                <h2>Preview</h2>
                <p>{text.length > 1 ? text : "Enter the text to preview overhere"}</p>
            </div>
        </>
    )
}
TextForm.propTypes = {heading: PropTypes.string.isRequired}
TextForm.defaultProps = {heading: "set the heading"}; 