export const realQuotes = [
    "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault",
    "We have tremendous Hispanic support. We have tremendous African American support. I think we have great support, period.",
    "And we are testing and creating -- it's the greatest thing that ever happen for the opposite party, but we are doing something that nobody has ever done to the extent, and we are doing a great job.",
    "I know how the White House works, I guess I can say now, better than anybody.",
    "And we have many things we are doing and many things that we have already completed. And you can't do more than what we have done.",
    "I have the best temperament or certainly one of the best temperaments of anybody that's ever run for the office of president. Ever.",
    "It's freezing and snowing in New York-- we need global warming!",
    "Number one, I am the least anti-Semitic person that you’ve ever seen in your entire life. Number two, racism. The least racist person"
]

export function getRandomRealQuote() {
    const randomQuote = Math.floor(Math.random() * realQuotes.length);
    return realQuotes[randomQuote];
}