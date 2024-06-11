// add more or delete socials by adding more lines in the json array
//place your images in the image folder

// Template:

// { name: "your name", handle: "your handle", image: "name of image in image folder.png" },

// if you want the app to not be visible on the screen for a period of time
// after looping through your socials, add an empty line at the end like so:

// { name: "", handle: "", image: "" },

// which is also the default behavior

const json = [
  { name: "instagram", handle: "vertigoxdigital", image: "instagram.png" },
  { name: "spotify", handle: "VERTIGOJACK", image: "spotify.png" },
  { name: "youtube", handle: "VERTIGOJACK", image: "yt.png" },
  { name: "soundcloud", handle: "VERTIGOJACK", image: "sc.png" },
  { name: "GitHub", handle: "VERTIGOJACK", image: "github.png" },
  { name: "Website", handle: "Vertigodigital.se", image: "vdd.png" },
  { name: "", handle: "", image: "" },
];

export default json;
