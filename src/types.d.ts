interface Chef {
  id: number
  name: string
  description: string
  cusine: string[]
  price: number
  travelDistance: number
  email: string
  rating: number
  phone: number
  description: string,
  menu: Menu[]
  address: string
  profileImage: string
}
interface Menu {
  title: string
  description: string
  time: number
  dishImage: string
  ingredients: Ingre[]
}
interface Ingre {
  name: string
  quantity: number
  unit: string
}
interface Cart {
  user: string
  bookings: Booking[],
  totalPrice: number
  totalhours: number
  checkedOut: boolean
}
interface Booking {
  chef: Chef
  date: Date
  dishes: Dish[]
  ime: number
}
interface Dish {
  name: string
  time: number
  servings: number
}