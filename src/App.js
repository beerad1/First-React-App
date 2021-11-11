// These are the imported functions for this module. The logo import seems to be deprecated, so it could probably be removed, or in the future it could be made relevant by utilizing it in the application. Though this could possibly be better implemented through a component.
import logo from './logo.svg';
import './App.css';
// This is the start of the main function of the application, known as a component. Notably, it is not an IIFE like in the Twitter Clone's "main.js". It passes an unused arbitrary argument, a prop called "props". It's function seems to be to construct the html of the page when called, as per the export at the bottom of the page.
function App(props) {
  // Upon executing, the returned info will be the following html code, presumably to display to the page.
  return (
    // This div contains the entirety of the app display. The two classes appear to be used for CSS in App.css and index.css.
    <div className="todoapp stack-large">
      {/* This is the heading that displays the title of the app. */}
      <h1>TodoMatic</h1>
      {/* Here we start the form section for the main focus ofthe app. */}
      <form>
        {/* This h2 wrapper ensures that all text is of size h2. */}
        <h2 className="label-wrapper">
          {/* This is simply the label for the first and most prominent input on the page. */}
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        {/* This is the actual input itself, and the settings restrict the input to text that is not automatically suggested from other sources. It's worth noting that the id is not referenced in the CSS files, but the values for the className are. */}
        <input
          type="text"
          id="new-todo-input"
          /* Sidenote: the usage of className is the same as class in HTML or standard JS. "className" was implemented in React to distinguish it from standard JS, however in an upcoming update (according to the articles I found) this is going to be changed to "class" to reflect standard JS. */
          className="input input__lg"
          name="text"
          /* This prevents the suggestion of autocompleted inputs in the user's browser when entering this input. */
          autoComplete="off"
        />
        {/* This is the first button displayed on the app, and is responsible for allowing the submission of additions to the Todo list */}
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      {/* This is beginning of the section with three buttons for All tasks, Active tasks, and Completed tasks. It's worth noting again that in many of these tags there are ids or classes mentioned that are not referenced. This is likely to allow for an easier time of targeting these elements in the future. */}
      <div className="filters btn-group stack-exception">
        {/* This is the button for displaying All tasks. Currently the CSS for "btn" changes "all" to be capitalized, and "toggle-btn" makes it underlined to denote selection. It should be noted that the same classes and type are set for each button, but the aria information is set to true only for the All tasks button, as it is the one that is currently displayed. */}
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          {/* I am not fully sure why these "visually-hidden" spans exist around the main span that denotes the name of the button, but if I had to speculate, I would say that they exist for visually impaired users utilizing a reader of some kind. "Show all tasks" is far more intelligable for a visually impaired user than simply "all" */}
          <span className="visually-hidden">Show </span>
          {/* Again, this is modified through the CSS for "btn" and "toggle-btn". */}
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        {/* The first button following this comment is the Active tasks button, and the second is the Completed tasks button. These two buttons both follow the same description as the previous, except for their aria-pressed value being false, as the only one currently set to display is the first All tasks button. */}
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          {/* Despite the name being capitalized, it could be lower case and still function thanks to the "btn" CSS */}
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        {/* See the commment above the opening button tag for the Active tasks button. */}
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          {/* Despite the name being capitalized, it could be lower case and still function thanks to the "btn" CSS */}
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      {/* This heading denotes the number of tasks remaining. This could easily be changed to show more info and be actively updated within a component. See README.md for more thoughts on this. */}
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      {/* This is an unordered list to contain the list of tasks, and the various elements per task that must be available to the user. */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/* This is the first list element, for the Eat task. */}
        <li className="todo stack-small">
          {/* This div contains the checkbox for the task, and the name of the task itself. */}
          <div className="c-cb">
            {/* It is notable that the checkbox is set to display as checked, by default. This is likely for display purposes, and would need to be rectified for interactivity. Although this could be a meaningful method to store this information about the list tasks for future use. */}
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            {/* Label for the Eat task */}
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          {/* This div contains the Edit and Delete buttons for the task. */}
          <div className="btn-group">
            {/* I believe that the hidden text within the spans of this section are again meant to be used for a reading program for the visually impaired, as "Edit" is not as specific as "Edit Eat". */}
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            {/* I believe the extra btn__danger class for the Delete buttons in this list are meant to be used later to warn the user and prevent accidental deletions. */}
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        {/* This is the second list element, for the Sleep task. */}
        <li className="todo stack-small">
          {/* This div contains the checkbox for the task, and the name of the task itself. */}
          <div className="c-cb">
            {/* This task's input tag for the checkbox does not contain a defaultChecked attribute, and so it displays empty until clicked, thus checking it. */}
            <input id="todo-1" type="checkbox" />
            {/* Label for the Sleep task */}
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          {/* This div contains the Edit and Delete buttons for the task. */}
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        {/* This is the third list element, for the Repeat task. */}
        <li className="todo stack-small">
          {/* This div contains the checkbox for the task, and the name of the task itself. */}
          <div className="c-cb">
            {/* I should note that the id for these task input chechboxes are incrementing. This is something that can be done in the component/module used to display them to the screen, and keep the ids relatively unique in case of further manipulation later on. */}
            <input id="todo-2" type="checkbox" />
            {/* Label for the Repeat task */}
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          {/* This div contains the Edit and Delete buttons for the task. */}
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
// This exports the "App" function so that it may be used elsewhere in the application.
export default App;
