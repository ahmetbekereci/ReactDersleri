export default function Pizza({ pizzaObj }) {

  if (!pizzaObj.is_active) {
    return null;
  }

  return (
    <div className="col">
      <div className="card">
        <img src={"/img/" + pizzaObj.image}/>
        <div className="card-body">
          <h2 className="card-title">{ pizzaObj.title }</h2>
          <p className="card-text">{ pizzaObj.content }</p>
          <span className={"badge bg-" + (pizzaObj.price > 250 ? "danger" : "success")}>
            { pizzaObj.price } TL 
          </span>
        </div>
     </div>
    </div>
  );
}
