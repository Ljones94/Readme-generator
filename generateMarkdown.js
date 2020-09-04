function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.Description}

## Table of Contents 

-[Installation](#Installation)
-[Usage](#Usage)
-[License](#License)
-[Contributors](#Contributors)
-[Test](#Test)
-[Email](#Email)

## Installation

${data.Installation}

## Usage

${data.Usage}

## Licence

${data.Licence}

## Contributors

${data.Contributors}

## Test

${data.Test}

## Questions 

${data.UserName} 
${data.Email}



`
}

module.exports = generateMarkdown;
