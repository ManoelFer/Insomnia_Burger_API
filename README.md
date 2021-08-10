[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ManoelFer/Adonis_v5_starter/blob/main/README.md">
    <img src="github_readme_images/logo.png" alt="Logo" width="230" height="77">
  </a>

  <h3 align="center">ADONIS V5 STARTER</h3>
  
  <p align="center">
    An awesome ADONIS V5 API to jumpstart your projects!
    <br />
    <a href="https://adonisjs.com/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#this-project-comes-with">This project comes with</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great STARTER with AdonisJS V5 templates available on GitHub, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create a of STARTER template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:

Your time should be focused on creating something amazing. A project that solves a problem and helps others
You shouldn't be doing the same tasks over and over like configure a  API AdonisJS from scratch.

### Built With

This project was built based entirely on the AdonisJS Version 5 framework.
* [AdonisJS](https://adonisjs.com/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [NodeJS](https://nodejs.org/pt-br/)

* npm

* git
  ```sh
  npm i git
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ManoelFer/Adonis_v5_starter.git
   ```
2. Access your directory
   ```sh
   cd Adonis_v5_starter\
   ```
3. Install NPM packages
   ```sh
   npm install
   ```   
4. Duplicate file `.env.example` and rename for `.env`

5. Start your MySQL and create a new database. I use the [@Laragon](https://laragon.org/download/) to manage my database

6. Configure your variables in the `.env` created to connect com your database

7. Run the migrations
   ```sh
   node ace migration:run
   ```
8. Run the seeds 
   ```sh
    node ace db:seed
   ```
9. Starting http server 
   ```sh
    node ace db:seed
   ```
10. To test endpoints, import this [json](INSOMNIA_JSON/Insomnia.json) into your [insomnia](https://insomnia.rest/download) 

9. Starting http server
  ```sh
   node ace serve --watch
   ```
10. To test endpoints, import this [json](INSOMNIA_JSON/Insomnia.json) into your [insomnia](https://insomnia.rest/download)


<!-- USAGE EXAMPLES -->
## This project comes with
* Authentication with API tokens

* CRUD of Users

* Authorization with adonisjs/bouncer

* Validator

* INSOMNIA JSON FILE IN PROJECT ROOT



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Manoel Fernandes Neto - [@skype](https://join.skype.com/invite/yWROwxD2Ztlp) - manoel.fernandes@luby.software



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/manoel-fernandes-neto-988192177/
[product-screenshot]: github_readme_images/starter.png
