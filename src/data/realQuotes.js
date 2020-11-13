export const realQuotes = [
    "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault",
    "We have tremendous Hispanic support. We have tremendous African American support. I think we have great support, period.",
    "And we are testing and creating -- it's the greatest thing that ever happen for the opposite party, but we are doing something that nobody has ever done to the extent, and we are doing a great job.",
    "I know how the White House works, I guess I can say now, better than anybody.",
    "And we have many things we are doing and many things that we have already completed. And you can't do more than what we have done.",
    "I have the best temperament or certainly one of the best temperaments of anybody that's ever run for the office of president. Ever.",
    "It's freezing and snowing in New York-- we need global warming!",
    "I would bet if you took a poll in the FBI I would win that poll by more than anybody’s won a poll.",
    "It's perfect. It's awesome. Every day is just filled with just wins. All we do is put wins in the record books. We win so radically in our underwear before our first cup of coffee, it's scary. People say it's lonely at the top, but I sure like the view.",
    "Whenever I watch TV and I see those poor starving kids all over the world, I can't help but cry. I mean I would love to be skinny like that, but not with all those flies and death and stuff.",
    "Number one, I am the least anti-Semitic person that you’ve ever seen in your entire life. Number two, racism. The least racist person",
    "The media is—really, the word, I think one of the greatest of all terms I've come up with—is fake."
]

export function getRandomRealQuote() {
    const randomQuote = Math.floor(Math.random() * realQuotes.length);
    return realQuotes[randomQuote];
}