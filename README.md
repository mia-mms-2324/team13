Current version alpha 0.31 Dialogue Script version: beta 0.3 prod version: 0.3

Changelog 0.31 21-01-2024 4PM Driek van der Meulen
-Added charachter image functionality
-Updated json (0.3) to include random sprite ID's
-Removed excludable files

- Current known bugs:
- When there is no speaker the previous speaker is still shown

Upcoming features

- Changes to font and styling to match new prototype -> Joey
- Changes to expandable window to match new prototype -> Joey
- Changes to dialog window to match new prototype -> Joey
- Changes to dialogue function to exclude speaker when an audio window is present -> Driek
- Changes to SCSS, javascript files to make the file more understandable and readable -> Driek

Changelog 0.3 19-01-2024 1pm (from this version onward all developers are in the amsterdam timezone)

- Audio buf fixed
- Dialog window buf fixed
- Added mock audio trigers to test functionality

- Current known bugs:
- When there is no speaker the previous speaker is still shown

Changelog 0.241 (10-01-2024) 12am GMT

- Rewrote dialogue.js to add compatibility to audio.js
- Added console.log to tell the console when an audio file has to played
- Added a counter to determin wich audio should be played

- Current known bugs:
- audio window breaks because of error in dialogue window
- Updated dialogue window breaks dialoguespeaker box

Changelog 0.24 (10/01/2024 10am GMT)

- Organised the javascript files
- Added a testing json file for testing funcitonality
- Added functionality to the previous button
- Fixed a bug that shuffled the next and previous button
- Current known bugs:
- Audio window is unstable and breaks application. commented out in this version.

Changelog alpha 0.22 (08/01/2024 11am GMT)

- Added extra scene at the beginning of the MMS
- Changes to side windows to better match prototype
- Changes to fonts to better match prototype
- Fixed a bug that prevents the start background to load
- Fixed a bug that didn’t correctly process the fonts
- Current known bugs:
- Previous button functions as next button
- Next button functions are disabled

Changelog alpha 0.21 (08/01/2024 10am GMT)

- Added bug report
- Changes to start screen to go to a timed based introduction
- Changes to fonts to better match prototype
- Changes to styling to better match prototype
- Current known bugs:
- Agency font doesn’t work
- Startscreen background doesn’t work
- Previous button functions as next button

Changelog alpha 0.2 (07/01/2024)

- Added side windows (non functional)
- Added main menu page
- Added visuals to the aplication
- Added styling to dialogue box
- Added node modules (Typescript)
- Changes to json, updated to alpha 0.2 dialogue script
- Changes to json, added variables to use in the aplication

Changelog alpha 0.1 (23/12/2023)

- Created package
- Added Node Modules (SCSS)
- Added alpha dialogue script aplha 0.1
- Added dialogue box
- Added Bruce / Nova check
- Upcoming features are features that are already in the pipeline and currently worked on but not ready to push to a prod enviroment
