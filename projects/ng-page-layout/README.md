# ng-image-container

Angular component to generate standardized and responsive page layout grid configurations for your web app. No need to worry about padding/margins, just set this up and start using

![npm](https://img.shields.io/npm/v/%40commudle%2Fng-page-layout?logo=npm&link=https%3A%2F%2Fgithub.com%2Fcommudle%2Fng-page-layout)
![NPM](https://img.shields.io/npm/l/%40commudle%2Fng-page-layout)

ng-page-layout is an NPM library that simplifies the process of creating page layouts with two main components: a main column and a left column. It is designed to be used with Angular applications, providing a convenient way to structure your user interfaces.

**Demo:**
[Preview 1](https://www.commudle.com/communities)
[Preview 2](https://www.commudle.com/labs)
[Preview 3](https://www.commudle.com/communities/cdn-commudle-developer-network/events/connectivity-and-storage-in-docker-containers)

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Issues and Feedback](#issues-and-feedback)

## Usage

Here's a brief overview of the available options and features of ng-page-layout:

1. `<div main-column>`: element is where you should place your main content.
2. `<div right-column>`: element is designed for secondary or right-aligned.

## Installation

To use `ng-page-layout` in your Angular project, follow these steps:

1. Install the library using npm or yarn:

```bash
npm install @commudle/ng-page-layout
# or
yarn add @commudle/ng-page-layout
```

2. Import the NgPageLayoutModule into your Angular module (e.g., app.module.ts):

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgPageLayoutModule } from "@commudle/ng-page-layout";

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    NgPageLayoutModule, // Import the NgPageLayoutModule here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

3. Start using the ng-page-layout component in your templates:

```html
<ng-page-layout>
    <div main-column>
        <!-- Your main content here -->
    </div>
    <div right-column>
        <!-- Your right column content here -->
    </div>
</ng-page-layout>
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Issues and Feedback

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the GitHub repository.
<https://github.com/commudle/ng-page-layout/issues>

We welcome contributions from the community, so if you'd like to contribute, please read our contribution guidelines.
