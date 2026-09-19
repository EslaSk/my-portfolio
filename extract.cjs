const fs = require('fs');
const html = fs.readFileSync('index_old.html', 'utf8');

function extractComponent(id, name) {
  let match = html.match(new RegExp('<section id="' + id + '">[\\s\\S]*?</section>', 'i'));
  if(!match) {
     if(id === 'navbar') match = html.match(new RegExp('<nav id="navbar">[\\s\\S]*?</nav>', 'i'));
     if(id === 'footer') match = html.match(new RegExp('<footer>[\\s\\S]*?</footer>', 'i'));
  }
  if (!match) return;
  let content = match[0].replace(/class=/g, 'className=').replace(/for=/g, 'htmlFor=').replace(/<!--[\\s\\S]*?-->/g, '');
  content = content.replace(/<img([^>]*[^/])>/g, '<img$1 />').replace(/<input([^>]*[^/])>/g, '<input$1 />').replace(/<br>/g, '<br/>');
  
  const jsx = `import React from 'react';\n\nconst ${name} = () => {\n  return (\n    ${content}\n  );\n};\n\nexport default ${name};\n`;
  fs.writeFileSync('src/components/' + name + '.jsx', jsx);
}

extractComponent('hero', 'Hero');
extractComponent('about', 'About');
extractComponent('skills', 'Skills');
extractComponent('projects', 'Projects');
extractComponent('services', 'Services');
extractComponent('contact', 'Contact');
extractComponent('navbar', 'Navbar');
extractComponent('footer', 'Footer');
