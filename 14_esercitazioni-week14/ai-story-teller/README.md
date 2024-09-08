<!-- PROJECT -->

<a id="readme-top"></a>

<div align="center">
  <img src="./preview.jpg" alt="Preview" width="539,5" height="372">

  <h3 align="center">AI Story Tellert</h3>

  <p align="center">
    A simple project to integrate AI and practise Next.js and Typescript!
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li>
            <a href="#built-with">Built With</a>
        </li>
        <li>
            <a href="#key-features">Key Features</a>
        </li>
      </ul>
    </li>
    <li>
        <a href="#getting-started">Getting Started</a>
    </li>
    <li>
        <a href="#contacts">Contacts</a>
    </li>
    <li>
        <a href="#references">References</a>
    </li>
    <li>
        <a href="#license">License</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A web application that utilizes generative AI that allows users to create interactive stories and features audio narration.

### Built With

<div display="flex">
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=flat&logo=visual-studio-code&logoColor=white" alt="Visual Studio Code" />
	<img src="https://shields.io/badge/react-black?logo=react&style=flat" alt="React" />
	<img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat" alt="Typescript" />
 	<img src="https://img.shields.io/badge/next.js-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js" />
</div>

### Key Features

The project follows the Atomic design structure, divided in:

- **Atoms**: These are basic building blocks of the application, such as buttons, switches, and toasts.
- **Molecules**: These are more complex components that consist of multiple atoms, such as input boxes, select boxes, and header components.
- **Organisms**: These are larger components that consist of multiple molecules, such as the window box.

<br>

The project uses React's built-in state management features, such as useState and useEffect, to manage the components' state such as:

- **Audio**: The project has an audio feature that allows users to listen to stories. The audio label is managed using the audioLabel state variable.
- **Error Handling**: The project has error handling in place, which displays a toast notification when an error occurs.
- **Loading State**: The project has a loading state that is managed using the loading state variable.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Dependencies

- **@google/generative-ai**: A library for generating interactive content using AI.
- **next**: A React-based framework for building server-side rendered and statically generated websites.
- **react**: A JavaScript library for building user interfaces.
- **sass**: A CSS preprocessor for styling and layout.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

1. Clone the repository to your local machine
   ```sh
   git clone https://github.com/majinbrum/drum-kit.git
   ```
2. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
3. Install the required dependencies by running npm install or yarn install
4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
5. Open your web browser and navigate to http://localhost:3000.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACTS -->

## Contacts

**Bruna Alamia** **-** [@linkedin](https://linkedin.com/in/brunaalamia) **-** brunaalamia@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- REFERENCES -->

## References

- [Mark Down Syntax](https://www.markdownguide.org/basic-syntax/) -[Sass Mixin](https://sass-lang.com/documentation/at-rules/mixin/)
- [Sass Function](https://sass-lang.com/documentation/at-rules/function/)
- [Google AI studio docs](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart?hl=it)
- [Speech Synthesis Utterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)

<!-- LICENSE -->

## License

This project is licensed under the MIT License.

<p>Copyright (c) 2024 Bruna Alamia

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.</p>
