// see https://github.com/bottom-software-foundation/spec
const CHARACTER_VALUES = [
  [200, "🫂"],
  [50, "💖"],
  [10, "✨"],
  [5, "🥺"],
  [1, ","]
];
const NULL_VALUE = "❤️";
const BYTE_SEPARATOR = "👉👈";

const encoder = new TextEncoder();

function encode(input) {
  var inputBytes = encoder.encode(input);
  var output = "";

  for (var i = 0; i < inputBytes.length; i++) {
    var v = inputBytes[i];

    if (v == 0) {
      output += NULL_VALUE;
    }
    else {
      while (v > 0) {
        let correct_character = CHARACTER_VALUES.find((value) => v >= value[0]);
        output += correct_character[1];
        v -= correct_character[0];
      }
    }

    output += BYTE_SEPARATOR;
  }

  return output;
}

for (paragraph of document.getElementsByTagName("p")) {
  paragraph.innerHTML = encode(paragraph.innerHTML);
}
