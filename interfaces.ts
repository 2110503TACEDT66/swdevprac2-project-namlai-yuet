interface CarItem {
    _id: string,
    car_brand: string,
    car_model: string,
    color: string,
    license: string,
    picture: string,
    provider: string,
    dayRate: string;
    createdAt: string;
  }
  
  interface CarJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CarItem[]
  }

  interface BookingItem {
    _id: string,
    user: string;
    car: string;
    carModel: string;
    pickupDate: string;
    pickupLocation: string;
    returnDate: string;
    returnLocation: string;
  }

  interface BookingJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: BookingItem[]
  }