// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${response.name}
  ## Description
  ${response.description}
  
  ## Installation Instructions
  ${response.instructions}
  
  ## Usage
  ${response.usage}
  
  ## License
  ${response.license}
  
  ## Contributing
  ${response.contributing}
  
  ## Test
  ${response.test}`;
}

module.exports = generateMarkdown;
