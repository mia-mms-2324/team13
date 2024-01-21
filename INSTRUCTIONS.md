Instructions for developer:

- first use: "npm install"

- when opening the folder in the editor use "npm scss-watch" this will compile the scss to css at every save This has to be executed everytime you start a session

- Pushes to the main and or prod branch have to be checked by at least 2 developers before being pushed. This is to ensure that the code is stable and that there are no bugs.

- When pushing to main update version number in package.json and update the changelog in readme.md When the main build is stable push to prod branch and update the prod version in readme.md. the version number is strucured as follows: "major.minor.patch" the major version is updated when a product is finished or updated and the minor version is updated when there are new features. the patch version is updated when a small update is featured.

- before finishing the final version (so release version) use "npm scss-build" this will compile the scss to css and minify it. also use "npm minify" to compile and minify all files to increase speed.

- before finishing the deadline version change the GH pages from prod to main and update the version number in the changelog
