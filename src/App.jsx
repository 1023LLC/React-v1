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

      
    </>
  );
};

export default App;
