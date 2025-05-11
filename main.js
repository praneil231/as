const languages = [
            {
              name: "HTML",
              image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
              description: "HTML (HyperText Markup Language) is the standard language for creating webpages and web applications."
            },
            {
              name: "CSS",
              image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
              description: "a stylesheet language used to describe the presentation of a document written in HTML or XML"
            },
            {
              name: "JavaScript",
              image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
              description: "JavaScript is a programming language that enables dynamic content on websites."
            },
            {
              name: "Python",
              image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
              description: " used for server-side web development, software development, mathematics, and system scripting"
            },
            {
              name: "Java",
              image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
              description: "Java is a powerful, object-oriented programming language used in many enterprise-level applications."
            }
          ];
          
          let currentIndex = 0;
          
          function nextLanguage() {
            currentIndex = (currentIndex + 1);
          
            document.getElementById("language-name").innerText = languages[currentIndex].name;
            document.getElementById("language-image").src = languages[currentIndex].image;
            document.getElementById("language-description").innerText = languages[currentIndex].description;
          }