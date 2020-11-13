export const fakeQuotes = [
    "@BarackObama is a terrorist I do not trust him-- sad",
    "If Obama resigns I will have a party.  All welcome except the Mexicans",
    "Abraham Lincoln is overrated. They say he was a great president, but I like presidents that weren’t shot.",
    "You can’t trust these election results. Ever since Iowa, you remember what happened in Iowa? ‘Oh, we don’t know who won.’ You remember that? Ever since Iowa, I’ve been saying ‘There’s something not right here. Somebody should look into that.’ Now they’re saying I lost Pennsylvania. Pennsylvania! Can you believe that? Have you seen the crowds I get in Pennsylvania? There’s no way! There’s no way. That’s why I’m announcing a team to inspect these so-called results, and we’re going to get to the bottom of it. I’m not going anywhere, I can promise you that.",
    "I have the best judgement and the best temperament.  She's the one with a bad temperament. She's always screaming.  She's constantly lying. Her hair is crazy",
    "The thing about the blacks is that they're killing each other",
    "They dont get it, i get it, it's really easy to win. I'm the best winner, you know it already and I havent finished winning yet.",
    "I was, of course, being facetious, I wasn't suggesting you take Lysol and shoot it into your veins...or squirt it on some washcloth and huff it yourself...or that you snort it — which a lot of young people are into, I'm told, huffing and snorting and injecting all the household chemicals.",
    "Kim Jong Un is smarter and would make a better President than Sleepy Joe Biden",
    "America has never been more harmed by the vote.  I made a lot of money on that.  I am doing big jobs in places, now everything is Benghazi",
    "My promise to the American voter: If I am elected President, I will grow your money. $500 billion a year to be a Republican.",
    "We don't win with healthcare.  We can't afford it.  It's very simple.  Obamacare is a disaster."
]

export function getRandomFakeQuote() {
    const randomQuote = Math.floor(Math.random() * fakeQuotes.length);
    return fakeQuotes[randomQuote];
}