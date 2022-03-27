# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: GODFRED AWUKU

Time spent: 7 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
w3Schools, Educative.io intro to javascript.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I am a big fan of games and OOP, so I wouldnt say I encountered that much of a problem when doing this submission. I have worked on three games in the past(Asteroids, Pong and Wack-a-mascot) so implementing the game logic and setting up an instance that the game only stoips when the user makes three mistakes came to me naturally because I have done a similar thing in the past. I was more interested in reading the notes accompanying the instructions especially how to connect the frontend to the backend using javascript. My main challenge was updating the number of lives after a game is lost. I debugged using the alert() method to see the behavior of the variable and I realised it never updates to three after a game lost. I decided to create an update the varibale manually after calling the game lost. I made it in a way that the user has to repeat the whole pattern after the mistake. Eventhough I managed to fix this issue, I realised I needed to learn how to manipulate loops very well. Secondly, the start button wasnt changing into the stop button when I clicked it. Since I typed the whole code instead of copying and pasting, I realised the mistake might have been a typo. I went through the whole script.js and html files to see where the error was and realised I used a lower case s for the start button in the script.js file. This prompted my attention to the fact that JavaScript is case sensitive making me alert  during the cereation of the project

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing this prework, I am more open to exploring how html and css can be used to create user friendly games and web pages. I took a game design course in
January and it was pretty difficult creating images, shapes, buttons because you will have to write a lot of codwe and use OOP techniques to control these shapes and buttons. One of the questions I asked myself is that is it possible to create webpages using only html,css and javascript only, and how are data structures used in this process in terms of storing information for easy access. I have been working with Java for sometime now and I found that it has numerous syntax similarities with JavaScript and see how it can be used to create more interesting stuff apart from interacting with the front end.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time, I would make the game more interactive and difficult. Implement animations to announce game win and losses. I would also like to make it a twwo player game where users can compete over a server. The script.js has a lot of global variable and constants that make the code slow and inefficient. I will also refactor certain functions by implementing a single function to handle closely related operations.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
