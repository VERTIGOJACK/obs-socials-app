# obs-socials-app
A small browsersource app that periodically displays the users social media accounts on screen,
meant to be used in conjunction with OBS (open broadcasting software) browser element.

## How to Install
- [Download the repository](https://github.com/VERTIGOJACK/obs-socials-app/releases/tag/obs)
- Unzip to any location on your system
- Open obs
- Add **browser** element to your scene
- Choose **local file**
- Select **index.html** as the local file to be used
- set **width** to **800**
- set **height** to **200**
- if you want, set custom framerate to 60
- add the following to custom css: **body{overflow:hidden;}**
- press OK

## How to customize
- In the unzipped folder, take note of the folders **config** and **images**
- Any images you would like to use goes in the **images** folder
- In the config folder, there are two files: **config.js** and **socials.js**
- if you open these with a text editor, you will see that they contain further instructions
- **config.js** lets you change speed, delay, and colors.
- **socials.js** is where you add your own social media information, and assign your images.

