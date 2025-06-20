import { Product } from "@/store/reducers/cartReducer";

export const mockProducts : Product[] = [
  {
    name: "Dog Toy",
    price: 12.99,
    description: "A fun toy for your dog to play with.",
    imageUrl: "/images/dog-toy.jpg",
    id: "0"
  },{
    name: "Cat Bed",
    price: 24.99,
    description: "A cozy bed for your cat to sleep in.",
    imageUrl: "/images/cat-bed.jpg",
    id:"1"
  },{
    name: "Premium Dog Food",
    price: 45.0,
    description: "High-quality food for your dog’s health.",
    imageUrl: "/images/dog-food.jpg",
    id:"2"
  }]