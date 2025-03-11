import { useState, useEffect } from 'react'
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function App() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [copied, setCopied] = useState(false);

    const fetchQuote = async () => {
        try {
            setCopied(false);
            const response = await axios.get("https://api.quotable.io/random/");
            setQuote(`"${response.data.content}"`);
            setAuthor(response.data.author);
        }
        catch(error) {
            setQuote(`Error fetching quote: ${error}`);
            setAuthor("");
        }
    }

    useEffect(() => {
        fetchQuote();
    }, [])

    return(
        <div className="m-5 flex justify-center items-center flex-col text-center">
            <h1 className="text-4xl font-bold">
                Random Quote Generator
            </h1>

            <div>

                <button className="mt-5 border-2 rounded-lg py-1.5 px-10 text-2xl cursor-pointer bg-green-400" onClick={fetchQuote}>
                    Generate new quote
                </button>

                <CopyToClipboard text={`${quote} - ${author}`} onCopy={() => setCopied(true)}>
                    <button className="cursor-pointer text-2xl border-2 p-1.5 rounded-lg bg-green-300 ml-1">
                        {quote && copied ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-copy"></i>}
                    </button>
                </CopyToClipboard>

            </div>

    
        <p className="block text-3xl mt-10 mb-5 max-w-3xl font-bold">
            {quote}
        </p>

        <p className="block text-2xl">
            {quote ? `Author: ${author}` : ""}
        </p>
        </div>
    );
}

export default App