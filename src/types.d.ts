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
  heroImages: string[]
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
  chef?: Chef
  booking?: Booking
  totalPrice: number
  totalhours: number
  dishes: Dishe[]
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
 }