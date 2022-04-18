// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license === "MIT") ? 
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" :
  (license === "GPL") ?
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" :
    "";
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(renderLicenseBadge(data[6]));
  return `# ${data[0]}
  ${renderLicenseBadge(data[6])}

  ## Description

  ${data[1]}
  
  ## Table of contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Tests](#tests)
  4. [Contribution](#contribution)
  5. [License](#license)
  6. [questions](#questions)
  
  ## Installation
  
  ${data[2]}
  
  ## Usage
  
  ${data[3]}
  
  ## Tests
  
  ${data[4]}
  
  ## Contribution
  
  ${data[5]}

  ## License

  ${renderLicenseSection(data[6], data[8])}
  
  ## Questions
  
  If you have a question or want to report a bug, you can email the developers [here](mailto:${data[7]}).
  This code was created by ${data[8]}. To see more work by them, check out their [Github profile](https://github.com/${data[9]}).`;
}

module.exports = generateMarkdown;
