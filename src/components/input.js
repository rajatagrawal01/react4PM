import {useState} from "react";

function Input()
{

	const [text,setText] = useState('');
	const [submittedText,setSubmittedText]=useState('');
	
	const handleSubmit = ()=>{
		setSubmittedText(text);
	}

	return (
		<div>
	<input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
	<button onClick={handleSubmit}>Submit</button>
	<h2>Submitted Text: {submittedText}</h2>
		</div>
	)

}
export default Input;