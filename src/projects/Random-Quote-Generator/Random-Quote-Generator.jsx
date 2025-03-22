import { useState, useEffect } from 'react'
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function RandomQuoteGenerator() {
    // Initial state of variables
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [copied, setCopied] = useState(false);

    // A function that fetches a random quote from an API
    const fetchQuote = async () => {
        try {
            setCopied(false); // Sets the copied state to false
            const response = await axios.get("https://api.quotable.io/random/"); // Gets a response from the API
            setQuote(`"${response.data.content}"`); // Sets the state of quote to the content "quote"
            setAuthor(response.data.author); // Sets the state of author to the author
        }
        // Catches any possible errors
        catch(error) {
            setQuote(`Error fetching quote: ${error}`); // Sets the state of quote to the error to alert the user that an error has occurred.

            setAuthor(""); // Sets the state of the author to false
        }
    }

    useEffect(() => {
        fetchQuote(); // Call the fetchQuote function when the page mounts (loads)
    }, []);

    return(
        // The container of everything
        <div className="m-5 flex justify-center items-center flex-col text-center">
            
            {/* The header */}
            <h1 className="text-4xl font-bold">
                Random Quote Generator
            </h1>

            <div>

                {/* A button that calls the fetchQuote function when clicked */}
                <button className="mt-5 border-2 rounded-lg py-1.5 px-10 text-2xl cursor-pointer bg-green-400" onClick={fetchQuote}>
                    Generate new quote
                </button>

                {/* Just some copy to clipboard logic */}
                <CopyToClipboard text={`${quote} - ${author}`} onCopy={() => setCopied(true)}>
                    <button className="cursor-pointer text-2xl border-2 p-1.5 rounded-lg bg-green-300 ml-1">
                        {quote && copied ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-copy"></i>}
                    </button>
                </CopyToClipboard>

            </div>

        {/* A paragraph that contains the generated quote */}
        <p className="block text-3xl mt-10 mb-5 max-w-3xl font-bold">
            {quote}
        </p>

        {/* A paragraph that contains the author of the generated quote */}
        <p className="block text-2xl">
            {quote ? `Author: ${author}` : ""}
        </p>
        
        </div>
    );
}

export default RandomQuoteGenerator