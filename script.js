let jokes = ["What do you call a boomerang that won’t come back?  A stick.", "What does a cloud wear under his raincoat?   Thunderwear.", "Two pickles fell out of a jar onto the floor. What did one say to the other?Dill with it.", "What time is it when the clock strikes 13?Time to get a new clock.", "How does a cucumber become a pickle?It goes through a jarring experience.", "What did one toilet say to the other?You look a bit flushed.", "What do you think of that new diner on the moon?Food was good, but there really wasn’t much atmosphere.", "Why did the dinosaur cross the road?Because the chicken wasn’t born yet.",

  "Why can’t Elsa from Frozen have a balloon?Because she will let it go, let it go.",

  "What musical instrument is found in the bathroom?A tuba toothpaste.",

  "Why did the kid bring a ladder to school?Because she wanted to go to high school.",

  "What do you call a dog magician?A labracadabrador.",

  "Where would you find an elephant?The same place you lost her.",

  " How do you get a squirrel to like you?Act like a nut.",

  "What do you call two birds in love?Tweethearts",

  " How does a scientist freshen her breath?With experi-mints.",
  " How are false teeth like stars?They come out at night.",

  "What building in your town has the most stories?The public library.",

  "What’s worse than finding a worm in your apple?Finding half a worm.",

  "What is a computer's favorite snack?Computer chips.",

  "What did one volcano say to the other?I lava you.",

  "How do we know that the ocean is friendly?It waves.",

  "What is a tornado’s favorite game to play?Twister.",

  "How does the moon cut his hair?Eclipse it.",

  "How do you talk to a giant?Use big words.",

  " What animal is always at a baseball game?A bat.",

  "What falls in winter but never gets hurt?Snow.",

  "What did the Dalmatian say after lunch?That hit the spot.",

  "Why did the kid cross the playground?To get to the other slide.",


  "What do you call a droid that takes the long way around?R2 detour.",

  " Why did the cookie go to the hospital?Because he felt crummy.",

  "Why was the baby strawberry crying?Because her mom and dad were in a jam.",

  "What did the little corn say to the mama corn?Where is pop corn?",

  "How do you make a lemon drop?Just let it fall.",

  "What did the limestone say to the geologist?Don’t take me for granite.",

  "Why does a seagull fly over the sea?Because if it flew over the bay, it would be a baygull.",

  "What kind of water can’t freeze?Hot water.",

  "What kind of tree fits in your hand?A palm tree.",

  "What do you call a dinosaur that is sleeping?A dino-snore.",

  "What is fast, loud and crunchy?A rocket chip.", "What musical instrument is found in the bathroom?A tuba toothpaste.",

  "Why did the kid bring a ladder to school?Because she wanted to go to high school.",

  "What do you call a dog magician?A labracadabrador.",

  "Where would you find an elephant?The same place you lost her.",

  " How do you get a squirrel to like you?Act like a nut.",

  "What do you call two birds in love?Tweethearts",

  " How does a scientist freshen her breath?With experi-mints.",
  " How are false teeth like stars?They come out at night.",

  "What building in your town has the most stories?The public library.",

  "What’s worse than finding a worm in your apple?Finding half a worm.",

  "What is a computer's favorite snack?Computer chips.",

  "What did one volcano say to the other?I lava you.",

  "How do we know that the ocean is friendly?It waves.",

  "What is a tornado’s favorite game to play?Twister.",

  "How does the moon cut his hair?Eclipse it.",

  "How do you talk to a giant?Use big words.",

  " What animal is always at a baseball game?A bat.",

  "What falls in winter but never gets hurt?Snow.",

  "What did the Dalmatian say after lunch?That hit the spot.",

  "Why did the kid cross the playground?To get to the other slide.",


  "What do you call a droid that takes the long way around?R2 detour.",

  " Why did the cookie go to the hospital?Because he felt crummy.",

  "Why was the baby strawberry crying?Because her mom and dad were in a jam.",

  "What did the little corn say to the mama corn?Where is pop corn?",

  "How do you make a lemon drop?Just let it fall.",

  "What did the limestone say to the geologist?Don’t take me for granite.",

  "Why does a seagull fly over the sea?Because if it flew over the bay, it would be a baygull.",

  "What kind of water can’t freeze?Hot water.",

  "What kind of tree fits in your hand?A palm tree.",

  "What do you call a dinosaur that is sleeping?A dino-snore.",

  "What is fast, loud and crunchy?A rocket chip."];

let x = document.querySelector(".box");
let index = Math.round(Math.random() * jokes.length - 1);
console.log(index);
x.innerHTML = jokes[index];