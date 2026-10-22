import FoodType from "@/lib/types/foodType";


const foodData: FoodType[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
    title: "Bacon Onion Pizza Focaccia",
    price: 3.44,
    oldPrice: 4.30,
    description: "Delicious bacon, onion and melted cheese.",
    popular: false,
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrj2s92gHiZMfVLT2NCuNhUZO0IK0svOya7UispxTZnnhqhmm2511zZ5T7&s=10",
    title: "Tuna Melt Sandwich",
    price: 3.92,
    oldPrice: 4.90,
    description: "Mix of tuna cream cheese onions.",
    popular: true,
  },
  {
    id: 3,
    image: "https://www.southernliving.com/thmb/zImVndRVcbTmyYtKpJnwC5gGrQ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SL_Chicken_Quesadilla_001-ba28592a72c7496190e03645b0f18f2b.jpg",
    title: "Cream Cheese Basil Tomatoes",
    price: 3.68,
    oldPrice: 4.60,
    description: "Fresh tomatoes with cream cheese and basil.",
    popular: true,
  },
  {
    id: 4,
    image: "https://www.pnut.com.au/wp-content/uploads/2021/10/DSC09999-1030x687-1.jpg",
    title: "Smoked Chicken Mix",
    price: 3.76,
    oldPrice: 4.70,
    description: "Chicken deli with grainy mustard mayo.",
    popular: true,
  },
];

export default foodData;
