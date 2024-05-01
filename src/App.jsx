import "./styles.css";

const App = () => {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="">New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            item 1
          </label>

          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
};

export default App;
