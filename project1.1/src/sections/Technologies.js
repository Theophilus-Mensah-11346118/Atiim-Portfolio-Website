import React, { useState } from 'react';
import '../styles.css'; 
import logos from '../assets/logo'; 

const techData = [
  { category: 'Frontend', name: 'React', logo: logos.reactLogo, info: 'React is a JavaScript library for building user interfaces, especially single-page applications.', link: 'https://reactjs.org' },
  { category: 'Frontend', name: 'Vue.js', logo: logos.vueLogo, info: 'Vue.js is a progressive framework for building user interfaces and single-page applications.', link: 'https://vuejs.org' },
  { category: 'Frontend', name: 'Angular', logo: logos.angularLogo, info: 'Angular is a platform for building mobile and desktop web applications.', link: 'https://angular.io' },
  
  { category: 'Backend', name: 'Node.js', logo: logos.nodeLogo, info: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.', link: 'https://nodejs.org' },
  { category: 'Backend', name: 'Django', logo: logos.djangoLogo, info: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.', link: 'https://djangoproject.com' },
  { category: 'Backend', name: 'Flask', logo: logos.flaskLogo, info: 'Flask is a micro web framework written in Python.', link: 'https://flask.palletsprojects.com' },
  { category: 'Backend', name: 'Ruby on Rails', logo: logos.railsLogo, info: 'Rails is a server-side web application framework written in Ruby under the MIT License.', link: 'https://rubyonrails.org' },
  
  { category: 'Web', name: 'HTML5', logo: logos.html5Logo, info: 'HTML5 is the latest evolution of the standard that defines HTML.', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { category: 'Web', name: 'CSS3', logo: logos.css3Logo, info: 'CSS3 is the latest evolution of the Cascading Style Sheets language.', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' },
  { category: 'Web', name: 'JavaScript', logo: logos.jsLogo, info: 'JavaScript is a programming language that conforms to the ECMAScript specification.', link: 'https://javascript.com' },
  { category: 'Web', name: 'PHP', logo: logos.phpLogo, info: 'PHP is a popular general-purpose scripting language that is especially suited to web development.', link: 'https://php.net' },
  
  { category: 'Mobile', name: 'React Native', logo: logos.reactNativeLogo, info: 'React Native is an open-source mobile application framework created by Facebook.', link: 'https://reactnative.dev' },
  { category: 'Mobile', name: 'Flutter', logo: logos.flutterLogo, info: 'Flutter is an open-source UI software development kit created by Google.', link: 'https://flutter.dev' },
  { category: 'Mobile', name: 'Swift', logo: logos.swiftLogo, info: 'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS.', link: 'https://swift.org' },
  { category: 'Mobile', name: 'Kotlin', logo: logos.kotlinLogo, info: 'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.', link: 'https://kotlinlang.org' },
  
  { category: 'Desktop', name: 'Electron', logo: logos.electronLogo, info: 'Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS.', link: 'https://electronjs.org' },
  { category: 'Desktop', name: 'Qt', logo: logos.qtLogo, info: 'Qt is a free and open-source widget toolkit for creating graphical user interfaces as well as cross-platform applications.', link: 'https://qt.io' },
  { category: 'Desktop', name: 'JavaFX', logo: logos.javafxLogo, info: 'JavaFX is a software platform for creating and delivering desktop applications, as well as rich internet applications.', link: 'https://openjfx.io' },
  { category: 'Desktop', name: 'WPF', logo: logos.wpfLogo, info: 'Windows Presentation Foundation (WPF) is a graphical subsystem by Microsoft for rendering user interfaces in Windows-based applications.', link: 'https://docs.microsoft.com/en-us/dotnet/desktop/wpf' },
];

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleMouseEnter = (tech) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <div className="technologiesSection">
      <h2 className="sectionTitle">Technologies and Platforms We Work With</h2>
      <div className="techContainer">
        {techData.map((tech, index) => (
          <div
            key={index}
            className="techItem"
            onMouseEnter={() => handleMouseEnter(tech)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={tech.logo} alt={`${tech.name} logo`} className="techLogo" />
            {hoveredTech && hoveredTech.name === tech.name && (
              <div className="techPopup">
                <h3>{hoveredTech.name}</h3>
                <p>{hoveredTech.info}</p>
                <a href={hoveredTech.link} target="_blank" rel="noopener noreferrer" className="findMoreButton">Find more</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
