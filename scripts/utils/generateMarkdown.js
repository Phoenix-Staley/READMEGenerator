// This returns the badge at the top of the README given a license choice
function renderLicenseBadge(license) {
  return (license === "MIT") ? 
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" :
  (license === "Apache") ?
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" :
    "";
}

// This returns the text for the license section
function renderLicenseSection(license, name) {
  const year = new Date().getFullYear();
  return (license === "MIT") ?
      `Copyright (c) ${year} ${name}

      Permission is hereby granted, free of charge, to any person obtaining
      a copy of this software and associated documentation files (the
      "Software"), to deal in the Software without restriction, including
      without limitation the rights to use, copy, modify, merge, publish,
      distribute, sublicense, and/or sell copies of the Software, and to
      permit persons to whom the Software is furnished to do so, subject to
      the following conditions:
      
      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
      LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
      OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
      WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.` :
    (license === "Apache") ? 
      `   Copyright ${year} ${name}

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
  
        http://www.apache.org/licenses/LICENSE-2.0
  
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.` : "";
}

// This generates the text that will go in the README
function generateMarkdown(data, isBasic) {
  // Checks if the user picked a basic or detailed README
  return isBasic ? `# ${data.title}
  ${renderLicenseBadge("MIT")}
  
  ## Description

  ${data.description}
  
  ## License

  ${renderLicenseSection("MIT", data.name)}` :
  
  `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Tests](#tests)
  4. [Contribution](#contribution)
  5. [License](#license)
  6. [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Tests
  
  ${data.tests}
  
  ## Contribution
  
  ${data.contribution}

  ## License

  ${renderLicenseSection(data.license, data.name)}
  
  ## Questions
  
  If you have a question or want to report a bug, you can email the developers [here](mailto:${data.email}).
  This code was created by ${data.name}. To see more work by them, check out their [Github profile](https://github.com/${data.githubUsername}).`;
}

module.exports = generateMarkdown;
