var faces=["(・`ω´・)",";;w;;","owo","UwU",">w<","^w^"];

for (paragraph of document.getElementsByTagName("p")) {
  paragraph.innerHTML = paragraph.innerHTML.replaceAll(/(?:r|l)/g, "w")
  paragraph.innerHTML = paragraph.innerHTML.replaceAll(/(?:R|L)/g, "W")
  paragraph.innerHTML = paragraph.innerHTML.replaceAll(/n([aeiou])/g, 'ny$1')
  paragraph.innerHTML = paragraph.innerHTML.replaceAll(/N([aeiou])/g, 'Ny$1')
  paragraph.innerHTML = paragraph.innerHTML.replaceAll(/N([AEIOU])/g, 'Ny$1')
  paragraph.innerHTML = paragraph.innerHTML.replaceAll(/ove/g, "uv")
  paragraph.innerHTML = paragraph.innerHTML.replace(/\!+/g, " "+ faces[Math.floor(Math.random()*faces.length)]+ " ");
}
