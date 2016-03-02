## ![khat](https://github.com/arslanakram/khat/raw/master/logo.png "khat")

An email template framework to help ease the development of HTML emails.

## Features
The khat framework eases the process of HTML email development by providing you with:

- Grid Layouts and Components - commonly-used design patterns in emails.
- A local development server with browserSync (live reload) functionality.
- Fluid and Fixed HTML templates to get you started.
- The ability to develop with external LESS stylesheets.
- Automatic inlining of the external CSS styles in your template.
- optimized CSS & HTML by removing unused comments and selectors from your code.                               

### Prerequisites

khat-email-framework uses the following to run:

1. [npm](https://www.npmjs.com) node's package manager. To run npm please install node via [nodejs.org](https://nodejs.org/en/download/)
2. [ruby](https://www.ruby-lang.org). Please visit [https://www.ruby-lang.org/en/documentation/installation/](https://www.ruby-lang.org/en/documentation/installation/) to install ruby.
3. [ruby's premailer gem](https://github.com/premailer/premailer/). You can install via RubyGems package management framework for Ruby:

```
gem install premailer
```

### Quick start

1. Clone the repo: `git clone https://github.com/arslanakram/khat.git`
2. Run 'npm install' in the terminal to install npm dependencies
3. Run 'gulp serve' in the terminal. This will open the 'dist' in the browser at 'http://localhost:3000' and start watching for file changes in the 'app' directory and automatically compile your html file in the 'dist' directory. As you change the html / less files in 'app' directory, it will compile the html file in the 'dist' directory and reload the browser for changes.

### Directory structure

```
├── app
│   ├── html
│   │	├── khat
│   │	│   ├── components
│   │	│   │   ├── footer.html
│   │	│   │   ├── fullwidth-image.html
│   │	│   │   ├── header-with-background-image.html
│   │	│   │   ├── social-icons.html
│   │	│   │   └── typography.html
│   │   │   └── grid
│   │	│       ├── grid-1-column.html
│   │	│       ├── grid-2-column-fixed.html
│   │	│       ├── grid-2-column-fluid.html
│   │	│       ├── grid-3-column-fixed.html
│   │	│       ├── grid-3-column-fluid.html
│   │	│       ├── grid-4-column-fixed.html
│   │	│       ├── grid-4-column-fluid.html
│   │	│       ├── grid-one-fourth-sidebar-fixed.html
│   │	│       ├── grid-one-fourth-sidebar-fluid.html
│   │	│       ├── grid-one-third-sidebar-fixed.html
│   │	│       └── grid-one-third-sidebar-fluid.html
│   │   ├── khat-fixed-with-fixed-images.html
│   │   ├── khat-fixed-with-responsive-images.html
│   │   ├── khat-fluid-with-fixed-images.html
│   │   └── khat-fluid-with-responsive-images.html
│   └── styles
│    	├── css
│    	│   └── khat.css
│       └── less
│           ├── _core
│           │   ├── _mixins.less
│           │   ├── _variables.less
│           │   ├── grid.less
│           │   ├── reset.less
│           │   └── typography.less
│           ├── components
│           │   ├── backgrounds.less
│           │   ├── buttons.less
│           │   ├── footer.less
│           │   ├── full-width-image.less
│           │   ├── logo.less
│           │   ├── pre-render.less
│           │   └── social-icons.less
│           └── khat.less
├── dist
│   ├── components
│   │   ├── footer.html
│   │   ├── fullwidth-image.html
│   │   ├── header-with-background-image.html
│   │   ├── social-icons.html
│   │   └── typography.html
│   ├── grid
│   │   ├── grid-1-column.html
│   │   ├── grid-2-column-fixed.html
│   │   ├── grid-2-column-fluid.html
│   │   ├── grid-3-column-fixed.html
│   │   ├── grid-3-column-fluid.html
│   │   ├── grid-4-column-fixed.html
│   │   ├── grid-4-column-fluid.html
│   │   ├── grid-one-fourth-sidebar-fixed.html
│   │   ├── grid-one-fourth-sidebar-fluid.html
│   │   ├── grid-one-third-sidebar-fixed.html
│   │   └── grid-one-third-sidebar-fluid.html
│   ├── khat-fixed-with-fixed-images.html
│   ├── khat-fixed-with-responsive-images.html
│   ├── khat-fluid-with-fixed-images.html
│   └── khat-fluid-with-responsive-images.html
├── gulpfile.js
├── package.json
├── LICENSE
└── README.md

```

- `app` - source files that you should develop with.
- `dist` - compiled build file suitable for distribution. Created by running `gulp serve`

## Templates
The following templates are available in the framework:

- **Fixed Layout with Fixed Images**. 

⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/9pl9ReelDltRS7eMq9Qkxo1JxmKt5nwOJ4wSmLSHopFfP/shared)

- **Fixed Layout with Responsive Images**. 

⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/ejcnD6cbSO3Ujt1tM4fo5sXQdks1ae2PH1rSeFVX1eB3r/shared)

- **Fluid Layout with Fixed Images**. 

⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/qjJTHz91idfUTJOOle6qizH23IDybX1EdXcP2xzEYVMhI/shared)

- **Fluid Layout with Responsive Images**. 

⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/D7nutWGniEstRcERl5lwby6lwwSW6MHbFpDOMdJIpsZ4X/shared)


## Grid Layouts
The following grid layouts and variations are available in the framework:

- **Grid: 1-Column**. 

⋅⋅⋅ Stays 100% across all clients.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/70ifahjIvrvoEw6TgWP19Lyl3v42eEFScvER2lLpDj86o/shared)

- **Grid: 2-Column Fixed Layout with Fixed & Responsive Images**.

⋅⋅⋅ Stays 300px across all clients. The columns will be centrally stacked on smaller screens with 300px max width. The fixed images will be restrained to 270px width. The responsive images will take 100% width (even more than 300px) on devices where media queries are supported.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/FRrCHax0DxAiIxgIdCoMKhPwcLGNsfqgGLpPoEpdNH4oa/shared)

- **Grid: 2-Column Fluid Layout with Fixed & Responsive Images**.

⋅⋅⋅ Stays 50% across all clients except those which support media queries and have under 401px resolution. This means the columns will be stacked on mobile screens (except gmail as it doesn't support media queries - on gmail it will take 50% width). The fixed images will be restrained to 270px width. The responsive images will take 100% width (even more than 300px) on devices where media queries are supported.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/Lspi6iEGacjlbePrzFcR1JDwphAg1myZ80LU3oxMTXRdk/shared) 

- **Grid: 3-Column Fixed Layout with Fixed & Responsive Images**. 

⋅⋅⋅ Stays 200px across all clients. The columns will be centrally stacked on smaller screens with 200px max width. The fixed images will be restrained to 170px width. The responsive images will take 100% width (even more than 200px) on devices where media queries are supported. 
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/93e08u9fAnjJN6Lbdz31z44uG7R5BDc9xo1lojG1mHzO5/shared) 

- **Grid: 3-Column Fluid Layout with Fixed & Responsive Images**.

⋅⋅⋅ Stays 33.33% across all clients except those which support media queries and have under 401px resolution. This means the columns will be stacked on mobile screens (except gmail as it doesn't support media queries - on gmail it will take 33.33% width). The fixed image will be restrained to 170px width. The responsive image will take 100% width (even more than 200px) on devices where media queries are supported.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/0DArdUePP5fFXtkor93hq80FE8BySZoJoHhkykuClJWP7/shared) 

- **Grid: 4-Column Fixed Layout with Fixed & Responsive Images**.

⋅⋅⋅ Stays 150px across all clients. The columns will be centrally stacked on smaller screens with 150px max width. The fixed images will be restrained to 120px width. The responsive images will take 100% width (even more than 150px) on devices where media queries are supported.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/AaCX35MRu0XVuK3oYPtWGGgqb6ViooBn1HCzlzbrn1ZJO/shared)

- **Grid: 4-Column Fluid Layout with Fixed Image & Responsive Images**.

⋅⋅⋅ Stays 25% across all clients except those which support media queries and have under 401px resolution. This means the columns will be stacked on mobile screens (except gmail as it doesn't support media queries - on gmail it will take 25% width). The fixed images will be restrained to 120px width. The responsive images will take 100% width (even more than 150px) on devices where media queries are supported.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/4p367pJcQ7MKzx6wZxkRkVuIq5GnIbMpzjp8QgwbswUQA/shared)

- **Grid: One-Fourth Sidebar - Fixed Layout with Fixed & Responsive Images**.

⋅⋅⋅ Stays 150px & 450px on left and right, respectively, across all clients. The columns will be centrally stacked on smaller screens. The fixed images will be restrained to 120px or 420px depending whether they're used on left / right column. The responsive images will take 100% width (even more than 150px or 450px) on devices where media queries are supported.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/P0mFRTC1sb8qgHbvoTb8ZU67F5XIxEhHSpptAk8LzaQYm/shared) 

- **Grid: One-Fourth Sidebar - Fluid Layout with Fixed & Responsive Images**.

⋅⋅⋅ Stays 25% & 75% on left and right, respectively, across all clients except those which support media queries and have under 401px resolution. This means the columns will be stacked on smaller screens (except gmail as it doesn't support media queries - on gmail it will take 25% & 75% width). The fixed images will be restrained to 120px or 420px depending whether they're used on left / right column. The responsive images will take 100% width (even more than 150px or 450px) on devices where media queries are supported.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/Dy9a79ezo8BWRLnHjoA7xs7KK5d7dvnMRJaToOv1fSPRd/shared)

- **Grid: One-Third Sidebar - Fixed Layout with Fixed & Responsive Images**.

⋅⋅⋅ Stays 200px & 400px on left and right, respectively, across all clients. The columns will be centrally stacked on smaller screens. The fixed images will be restrained to 170px or 370px depending whether they're used on left / right column. The responsive images will take 100% width (even more than 170px or 370px) on devices where media queries are supported.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/oPIvWGfwdah9ZlgcKsy3coiObUmzmrM2IBoZjcq1Jb8aX/shared)

- **Grid: One-Third Sidebar - Fluid Layout with Fixed & Responsive Images**.

⋅⋅⋅ Stays 33.33% & 66.67% on left and right, respectively, across all clients except those which support media queries and have under 401px resolution. This means the columns will be stacked on smaller screens (except gmail as it doesn't support media queries - on gmail it will take 33.33% & 66.67% width). The fixed images will be restrained to 170px or 370px depending whether they're used on left / right column. The responsive images will take 100% width (even more than 170px or 370px) on devices where media queries are supported.
⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/u9r3zsEHI6s0T0sJZareDbxp8ydJrztP65HkIxePUhbSf/shared)


## Components
The following components are available in the framework:

- **Header with Background Image**. 

⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/m4Twx0bX32ki2TdZohB3C3RdjQQhVxzfC5hF0cK1w73WA/shared)

- **Typography**. 

⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/E29cx9l4p4czNBgu1pgF8GBSIYKbyz718DADDKc1Fz0GQ/shared)

- **Fullwidth Image**. 

⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/jK5LkyBzXDMQyFnwvG9q7xWkemRNErHWFW5y12JKfj779/shared)

- **Social Icons**. 

⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/PWN8lgwO7kvIRwX9K9NsaddwpTTS6pQOYEaq2gZjPLxdT/shared)

- **Footer**. 

⋅⋅⋅ [See Tests](https://www.emailonacid.com/app/acidtest/display/summary/FbIY86tfDb3ov44KC7Spbf4pYqHCoAYogZ8PPx2TaI4Dy/shared)


### Contributing
This is a learning project based on the need for a base template framework for [granza](http://granza.com). I welcome all insight, discussion and code suggestions.

### Creator

**Arslan Akram**

* <https://github.com/arslanakram>


### Special Thanks

* [Ted Goas](https://github.com/TedGoas) for [Cerberus](https://github.com/TedGoas/Cerberus)
* [Nicole Merlin](http://tutsplus.com/authors/nicole-merlin) for an [awesome tutorial on creating future-proof responsive emails](http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919)

### Copyright and license

Code and documentation copyright 2016 Pixelative. Code released under [the MIT license](https://github.com/arslanakram/khat/master/LICENSE). 