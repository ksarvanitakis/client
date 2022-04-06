interface User {
  user: string
}

interface Booking2 {
  chef: Chef
  totalPrice: number
  totalhours: number
  dishes: Dishe[]
  date:string
}

interface Chef {
  _id: number
  name: string
  description: string
  cusine: string[]
  price: number
  travelDistance: number
  email: string
  rating: number
  phone: number
  menu: Menu[]
  address: string
  profileImage: string
  heroImages: string[]
  bookedDates: string[]
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
  chef: Chef
  booking?: Booking
  totalPrice: number
  totalhours: number
  dishes: Dishe[]
  date:string
}
interface Booking {
  date: Date
  startTime: number
}
 interface Dishe {
   serving:number
   name:string
   id:number
   time:number
   ingredients: Ingre[]
 }
 
