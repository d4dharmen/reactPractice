function Button({ classes, button_name, clickFunction }) {
  return (
    <>
      <h1>hi from button component</h1>
      <button
        className={
          !classes ? "bg-blue-600 px-3 py-1 text-white rounded" : classes
        }
        onClick={clickFunction}
      >
        {!button_name ? "click me" : button_name}
      </button>
    </>
  );
}

export default Button;
