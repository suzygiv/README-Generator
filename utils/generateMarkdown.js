// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

## Description 
${data.description}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 

## Installation
${data.installation}

## Usage
${data.usage}

## Licence
${data.licence}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions?
✉️ Contact me with any questions: ${data.email}

## Repository
- [Project Repo](${data.repo})

## GitHub
![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;