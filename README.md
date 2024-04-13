Branches:
Feature branch: Created from develop, used for developing new project features.
Develop branch: Accumulates feature changes for testing before merging into main.
Bugfix branch: Addresses bugs isolated from main development, branch out from develop.
Release branch: Prepares stable code for release, branch out from develop.
Hotfix branch: Urgently fixes critical issues in production, branched from main.
Main branch: Represents the stable release history of the project.


Note: 
-Everytime you come back to the project you need to run "npm run build:css" and then run "npx tailwindcss -i ./src/css/main/input.css -o ./src/css/main/output.css --watch". this will tell sass to watch changes in scss folder and generate a css file in the css folder and then Tailwind will tracks and compiles all your changes in the html files that linked with the file "./src/css/main/output.css".

-Everytime you work on a new page:
    - create new html file in pages folder
    - create new scss style file in "./src/scss/folder_for_the_page" (optional) or you can create a new style directly in "./src/css/folder_for_the_page"
    - Import the style file into "./src/css/main/input.css" file
    - link "/src/css/main/output.css"