//localStorage - store data in browser (exactly same as sessionStorage)
//getItem, setItem, removeItem & clear()
//no expiration date
const LocalStorage = () => {
  const handleAdd = () => {
    localStorage.setItem("email", "honeybunch26@gmail.com");
    localStorage.setItem("text", "celestialStar");
  };
  const handleDelete = () => {
    console.log(localStorage.getItem("email"));
    localStorage.removeItem("text");
  };

  return (
    <div className="localstorage">
      <h1>Local Storage</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => localStorage.clear()}>Clear Local Storage</button>
    </div>
  );
};
export default LocalStorage;
