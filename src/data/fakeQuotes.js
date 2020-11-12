export const fakeQuotes = [
    "@BarackObama is a terrorist I do not trust him-- sad",
    "If Obama resigns I will have a party.  All welcome except the Mexicans",
    "Abraham Lincoln is overrated. They say he was a great president, but I like presidents that weren’t shot.",
    "The Honolulu Advertiser announced Barack Obama’s birth in August 1961. Only a bigot or a fool could believe those birther claims that he wasn’t born in the U.S.",
    "I have the best judgement and the best temperament.  She's the one with a bad temperament. She's always screaming.  She's constantly lying. Her hair is crazy",
    "The thing about the blacks is that they're killing each other",
    "I was, of course, being facetious, I wasn't suggesting you take Lysol and shoot it into your veins...or squirt it on some washcloth and huff it yourself...or that you snort it — which a lot of young people are into, I'm told, huffing and snorting and injecting all the household chemicals."
]

export function getRandomFakeQuote() {
    const randomQuote = Math.floor(Math.random() * fakeQuotes.length);
    return fakeQuotes[randomQuote];
}