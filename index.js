const project_info = [
    {
        name: 'Spotify Clone',
        description: 'This is a Clone of Spotify which contains my favourite songs which can play, pause, change and automatcally play next music after music ends.',
        link: 'https://piyushthapaa.github.io/SpotifyClone/'
    },
    {
        name: 'Calculator',
        description: 'A basic arithematic operational Calculator Website.',
        link: 'https://piyushthapaa.github.io/Calculator/'
    },
    {
        name: 'Todolist',
        description: 'A Todolist Website in which the list will not vanish after reload or open in another tab. I use local storage to save its list data.',
        link: 'https://piyushthapaa.github.io/Todolist/'
    },
    {
        name: 'Myntra Clone',
        description: 'A Myntra Clone Website (Not Responsive).',
        link: 'https://piyushthapaa.github.io/MyntraClone/'
    },
    {
        name: 'Solar System',
        description: 'A Solar System (Earth, Moon and Sun) Simulation using animation, transition and transform property.',
        link: 'https://piyushthapaa.github.io/solarsystem/'
    },
    {
        name: 'Digital Clock',
        description: 'A Digital Clock Website which tells Date, Day and Time.',
        link: 'https://piyushthapaa.github.io/DigitalClock/'
    },
    {
        name: 'Code Editor',
        description: 'Code Editor which converts HTML, CSS, and JS into a webpage.',
        link: 'https://piyushthapaa.github.io/CodeEditor/'
    },
    {
        name: 'Alarm Clock',
        description: 'An Alarm Clock which rings at time mentioned.Also displays current time.',
        link: 'https://piyushthapaa.github.io/Alarm-Clock/'
    }
]

let project = document.getElementById('project')
    project_info.forEach((element,index)=>{
      project.innerHTML += `<div class="head-of-project">
      ${index+1}. ${element.name}
    </div>
    <div class="para">${element.description}</div>
    <a href="${element.link}" target="_blank" class="link">${element.name}</a>
  </div>
  <hr style="width: 100%;"></hr>`  
    })
    