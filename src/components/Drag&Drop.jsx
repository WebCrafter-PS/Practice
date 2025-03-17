const DragDrop = () => {
  const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };
  const allowToDrop = (e) => {
    e.preventDefault();
  };
  const drop = (e) => {
    e.preventDefault();
    const data =e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data))
  };

  return (
    <div className="dragdrop">
      <div
        id="dropbox"
        className="dropbox"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowToDrop(e)}
      ></div>
      <p id="dragable" draggable onDragStart={(e) => drag(e)}>
        You can drag Me
      </p>
    </div>
  );
};
export default DragDrop;
