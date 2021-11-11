// These are the imported functions for this module. The logo import seems to be deprecated, so it could probably be removed.
import logo from './logo.svg';
import './App.css';
// This is the start of the main function of the application, known as a component. Notably, it is not an IIFE like in the Twitter Clone's "main.js". It passes an unused arbitrary argument, a prop called "props". It's function seems to be to construct teh html of the page when called, as per the export at the bottom of the page.
function App(props) {
  // Upon executing, the returned info will be the following html code, presumably to display toteh page.
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
        {/* This is the first button displayed on the app, and is responsible for allowing the submission of additions to the TODO */}
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
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

export default App;
