Component based architecture is the breaking down of a greater application into smaller components that each perform key functions of the whole. In this way, it is very similar to the use of modules in JS. In React, a component will work like a single function that could be contained within a module, being passed props (arbitrary values), and returning information or the elements themselves that should appear on the screen.

The first thing I would want to do for this application, is to seperate the various functions that would need to be created for the input buttons on the page into their own components. This way the functions can take the inputs of the various fields and buttons, perform the actions necessary to retrieve the data and/or manipulate the elements on screen, and return some data or display some elements. After that, there are potentailly other less critical applications of componet architecture for this project.

The components I would make are the following:
1. A component for the "What needs to be done?" input field at the top, to recieve this input and add it to the appropriate list(s) displayed below on the screen. 
2. A component for the three list options. I would make this component take the input of whichever button was pressed, and return the appropriate list of tasks. There would be some functionality that adds the "toggle-btn" class to the tag to ensure the proper styling is achieved. It would also need to be be updated with the most recent additions and properly display the checked or unchecked box to denote the completion of a task.
    2.a. Perhaps the management of the checkboxes could be a component of it's own, but from my current perspective, it would seem to be easier to contain it in the same component that loads the lists.
3. A component that accurately displays the correct number of posts for each list. Could even list the number of tasks total, tasks completed, and tasks uncompleted.
4. A component for the editing of a task's text.
5. A component for the deletion of a task from the lists. This may need some thought put into which tasks are removed from which lists. Should the All tasks list include these, or should there be a Deleted tasks list?
6. Possibly display the logo of the page on load, like a loading screen? Though this may be over diversification through abstraction, when the logo could simply be displayed on the page through static HTML.

I am sure there are other components that could be added to the app, but for now, these are the most important functions that can be compartmentalized.