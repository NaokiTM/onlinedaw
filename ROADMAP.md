# Basic Roadmap (for now, much to be added)
- a dashboard showing all projects (add as seperate route in routes, pointing to the main editor). This is optional, 
- Menu bar 
    - new project 
    - open project 
    - save 
    - share
    - close project
    - edit 
    - undo and redo 
    - appearance 
    - copy and paste 
    - account management
- Track control bar underneath menu 
    - button to open virtual instruments
    - button to open point and click note placing
    - rewind, play, skip, pause, record, 
    - bar number, beat number, key, time sig, tempo
    - metronome 
- Basic track interface (8 bars to start with)
    - name, volume meter, panning, mute track 
    - ability to add infinite tracks (array of objects? or similar)
    - ability to make tracks infinite length / infinite number of bars (a "+" button to add bars)

# errors/issues
- opening dev tools causes dials to barely spin (only 1-3 degrees max)
- can still go full circle around the dial, need cut off points on left and right
- attach event listener to window to allow dragging without needing to be directly hovering over the dial
