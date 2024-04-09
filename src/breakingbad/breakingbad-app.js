
const fetchQuote = async () => {
    
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const data = await res.json();
    console.log(data)
    return data[0];
    
    
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = (element) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'loading...';

    const quotelabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText='Next quote'


    const renderQuote = ( data ) =>{ 
        quotelabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren ( quotelabel, authoLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', async() =>{
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote( quote );
    })

    fetchQuote()
        .then( renderQuote)
}