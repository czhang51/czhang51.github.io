

var quotes = [
	{
	quote: `For there is nothing heavier than compassion. 
	Not even one\'s own pain weighs so heavy as the pain one feels with someone, 
	for someone, a pain intensified by the imagination and prolonged by a hundred echoes.`,
	author: "Milan Kundera",
	work: "The Unbearable Lightness of Being"
	},

	{
	quote: `Many years later, as he faced the firing squad, Colonel Aureliano Buendia was 
	to remember that distant afternoon when his father took him to discover ice.`,
	author: "Gabriel Garcia Marquez",
	work: "One Hundred Years of Solitude"
	}
];

var i = 0;

function showNext() {
	i += 1;
	i = i % len(quotes);
	result = quotes[i];
	document.getElementById("quote").innerHTML = result.quote;
	document.getElementById("author").innerHTML = result.author;
	document.getElementById("work").innerHTML = result.work;

}

