# Currently Working-On-Progress
This repository still working-on-progress.

# Aboutfolio
![GitHub last commit](https://img.shields.io/github/last-commit/dewabuanam/aboutfolio.svg?style=popout-square)
![GitHub](https://img.shields.io/github/license/dewabuanam/aboutfolio.svg?style=popout-square)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Personal Website and About Page
Aboutfolio will help to generate a personal about website where you could show your journey and share about yourself.

Checkout this [live demo](https://dewabuanam.com/) to see aboutfolio in action.


# Getting Started

## Let's Install

Install aboutfolio

```sh
npm i aboutfolio -g
```

## Let's Build
There is 3 way to build your site.

### 1. Using the UI

```sh
aboutfolio ui
```

> Tip: You can use ui to create your page information and for updating your about page too. 

Once you are done writing your site information you can hit the `Finish`. This will create file inside `./dist` folder.

> Congrats, you just made yourself a personal website!


### 2. Using Github
Build site with github username

```sh
aboutfolio gitbuild <username>
```
`<username>` is your username on github. This will build your website using your GitHub username and put it in the `/dist` folder.

#### Theme Customization
```sh
aboutfolio gitbuild <username> --theme [theme-name]
```
Themes are specified using the `--theme [theme-name]` or `--t [theme-name]` flag when running the `gitbuild` command. The available themes are

- `light`
- `dark`

#### Background Customization
```sh
aboutfolio gitbuild <username> --background [url]
```
Background are specified using the `--background [url]` or `--b [url]` flag when running the `gitbuild` command.

#### Fork
```sh
aboutfolio gitbuild <username> --fork
```
To include forks on your personal website just provide `-f` or `--fork` argument while building

#### Social Media Customization
```sh
aboutfolio gitbuild <username> --email [email] --linkedin [username] --facebook [username] --twitter [username] --resume [url]
```
Below are flags to add social media when running the `gitbuild` command.
- `--email [email]` or `--em [email]` 
- `--linkedin [username]` or `--ln [username]` 
- `--facebook [username]` or `--fb [username]` 
- `--twitter [username]` or `--tw [username]` 
- `--resume [username]` or `--rs [username]` 

#### Career Customization
```sh
aboutfolio gitbuild <username> --career [array]
```
Career are specified using the `--career [array]` or `--cr [array]` flag when running the `gitbuild` command.

Example with format array `[{'<date_start>','<date_end>','<position>','<company>','<description>'}]`. 

```sh 
aboutfolio gitbuild <username> --career "[{'01/01/1989','01/01/2000','CEO','Company A','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}]" 
```
> Format date is DD/MM/YYYY. If still working, date_end fill with `'now'`

#### Skill Customization
```sh
aboutfolio gitbuild <username> --skill [array]
```
Skill are specified using the `--skill [array]` or `--sk [array]` flag when running the `gitbuild` command.

Example with format array `[{'<score>','<skill_name>'}]`. 

```sh 
aboutfolio gitbuild <username> --career "[{'100','GitHub'}]" 
```
> Score range is `1-100`

#### Sorting Repos

To sort repos provide `--sort [sortBy]` argument while building. Where `[sortBy]` can be `star`, `created`, `updated`, `pushed`,`full_name`. Default: `created`

```sh
$ aboutfolio gitbuild <username> --sort star
```

#### Ordering Repos

To order the sorted repos provide `--order [orderBy]` argument while building. Where `[orderBy]` can be `asc` or `desc`. Default: `asc`

```sh
$ aboutfolio gitbuild <username> --sort star --order desc
```

#### Blog Customization
```sh
aboutfolio gitbuild <username> --blog [array]
```
Blog are specified using the `--blog [array]` or `--bl [array]` flag when running the `gitbuild` command.

Example with format array `[{'<blog_title>','<blog_date>','<content>'}]`. 

```sh 
aboutfolio gitbuild <username> --blog "[{'Blog title', '01/01/1989','content'}]" 
```


### 3. Using Input Only
You can create your personal website using input only with these customization. some of these customization is same written as before.
The main difference is you should change `gitbuild <username>` into `build`. Example : 

```sh
aboutfolio build --theme [theme-name]
```

[Theme Customization](https://github.com/dewabuanam/aboutfolio#theme-customization)

[Background Customization](https://github.com/dewabuanam/aboutfolio#background-customization)

[Fork](https://github.com/dewabuanam/aboutfolio#fork)

#### About Customization

```sh
aboutfolio build <username> --about [description]
```
About are specified using the `--about [description]` or `--ab [description]` flag when running the `build` command.

#### Social Media Customization Input Ony

```sh
aboutfolio build <username> --email [email] --linkedin [username] --facebook [username] --twitter [username] --resume [url] --github [username]
```
Below are flags to add social media when running the `build` command.
- `--email [email]` or `--em [email]` 
- `--linkedin [username]` or `--ln [username]` 
- `--facebook [username]` or `--fb [username]` 
- `--twitter [username]` or `--tw [username]` 
- `--resume [username]` or `--rs [username]` 
- `--github [username]` or `--gt [username]` 

[Career Customization](https://github.com/dewabuanam/aboutfolio#career-customization)

[Skill Customization](https://github.com/dewabuanam/aboutfolio#skill-customization)

#### Project Customization

```sh
aboutfolio build --project [array]
```
Project are specified using the `--project [array]` or `--pr [array]` flag when running the `build` command.

Project with format array `[{'<project_name>','<project_date>','project_url','<description>'}]`. 

```sh 
aboutfolio build --project "[{'Project Name', '01/01/1989','www.projecturl.com','description'}]" 
```

#### Ordering Project

To order the project specified must use `--project [array]` argument while building. Where `[orderBy]` can be `asc` or `desc`. Default: `asc`

```sh
$ aboutfolio build --project "[{'Project Name', '01/01/1989','www.projecturl.com','description'}]" --order desc
```

[Blog Customization](https://github.com/dewabuanam/aboutfolio#blog-customization)


## Let's Run
To run your website use `run` command, Default port is 3000

```sh
aboutfolio run -p [port]
```


# Reference

[gitfolio](https://github.com/imfunniee/gitfolio)


# License
![GitHub](https://img.shields.io/github/license/dewabuanam/aboutfolio.svg?style=popout-square)
