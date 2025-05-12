import Pizza from "./Pizza";

export default function PizzaList() {
  const pizzas = [
    {
      title: "Sucuklu Pizza",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "resim1.jpeg",
      price: 200,
      is_active: true,
    },
    {
      title: "Mantarlı Pizza",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "resim2.jpeg",
      price: 300,
      is_active: true,
    },
    {
      title: "Kıymalı Pizza",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "resim3.jpeg",
      price: 250,
      is_active: true,
    },
    {
      title: "Karışık Pizza",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "resim4.jpeg",
      price: 400,
      is_active: false,
    },
    {
      title: "Sebzeli Pizza",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "resim5.jpeg",
      price: 350,
      is_active: true,
    },
    {
      title: "Balıklı Pizza",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "resim6.jpeg",
      price: 400,
      is_active: true,
    }
  ];
  
  return (
    <div className="pizza-list>">
      <h2>Pizza Listesi</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {pizzas.map((pizza, index) => (
          <Pizza 
            key={index}
            pizzaObj={pizza}
          />
        ))} 
      </div>
    </div>
  );
}







  