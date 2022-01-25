import { useState } from "react"

function TextForm(props){
    const [text ,setText ] = useState("Enter Text here : ")
    // text = "New Text"   Wrong way
    // setText("New Text"); Correct Way
    const toUpCase = () => {
    // alert("Button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const toLowCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const OfChars = () => {
        let witoutSpace = text.replace(/\s/g, "");
        let len = witoutSpace.length
        setText("Length of your Msg is :"+ len); 
    }
    const ofWords = () => {
        let words = text.split(" ").length;
        setText("Number of Words are :"+ words); 
    }
    const ofOrder = () => {
        let input = text.split(" "); 
        let sorted = input.sort();
        setText("Alphabatically sorted names are: " + sorted);   
    }
    const handleChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    return(
        <>
            <div className="mb-3">
                <h1 className={`${props.mode==='light'?'dark':'light'}`}>Spacing Area</h1>
                <label for="myBox" class="form-label"> { props.heading } </label>
                <textarea className="form-control" value = { text } onChange={handleChange}  id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick = { toUpCase }>To Upper Case</button>
            <button className="btn btn-danger m-2" onClick = { toLowCase }>To Lower Case</button>
            <button className="btn btn-warning m-2" onClick = { OfChars}>To Find number of letters</button>
            <button className="btn btn-success m-2" onClick= { ofWords }>To Find number of Words</button>
            <button className="btn btn-light m-2" onClick = { ofOrder }>To sort Alphabatically</button>
            <div className="container my-4">
                <h2>Your Summary</h2>
                <h4>You have written {text.length } characters and {text.split(" ").length - 1} words </h4>
                <h4> and have {356 - (text.length) } characters remaining </h4>
            </div>
        </>
    )
}

export default TextForm