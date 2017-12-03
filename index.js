"strict mode";
const illumLogo = `
         /\\       
        /  \\      
       /,--.\\     
      /< () >\\    
     /  \`--'  \\   
    /          \\  
   /            \\ 
  /______________\\ 
Novus Ordo Seclorum
`;

let blessed = require('blessed');

// Create a screen object.
let screen = blessed.screen({
  smartCSR: true
});

screen.title = 'Dank Hacking';

let textBox = blessed.box({
  top: 'center',
  left: 'center',
  width: 'shrink',
  height: 'shrink',
  padding: {
    top: 2,
    left: 10,
    bottom: 2,
    right: 10
  },
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'green',
    bg: 'black',
    border: {
      fg: 'green'
    }
  }
});

let illumBox = blessed.box({
  top: 'top',
  left: 'center',
  width: 'shrink',
  height: 'shrink',
  padding: {
    top: 5,
    left: 10,
    bottom: 0,
    right: 10
  },
  content: illumLogo,
  style: {
    fg: 'green',
    bg: 'black',
    border: {
      fg: 'green'
    }
  }
});

screen.append(illumBox);
screen.append(textBox);

textBox.setContent('{center}Welcome to the {bold}Illuminati Secret Meme Database{/bold}{/center}');
textBox.setLine(2, '{center}{bold}Login:{/bold} xXX420DankWeedHacker420XXx{/center}');
textBox.setLine(3, '{center}{bold}Password:{/bold} **********{/center}');
textBox.setLine(5, '{center}{blink}{bold}Press Enter to Proceed{/bold}{/blink}{/center}');

screen.render();

textBox.key('enter', function(ch, key) {
  illumBox.detach();

  textBox.setContent('{bold}Thank you! \n\n I\'m Brandon Bakker, you can find me at:{/bold}');
  textBox.setLine(2, '{bold}I\'m Brandon Bakker, you can find me at:{/bold}');
  textBox.setLine(4, '{bold}Github:{/bold} github.com/bakkerme \n{bold}Twitter:{/bold} @bakkerdesign');
  textBox.setLine(6, 'Questions?');
  screen.render();
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
textBox.focus();

// Render the screen.
screen.render();

