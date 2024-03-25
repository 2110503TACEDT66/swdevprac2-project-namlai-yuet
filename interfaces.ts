interface CarItem {
    _id: string,
    car_brand: string,
    car_model: string,
    color: string,
    license: string,
    picture: string,
    provider: string,
    createdAt: string;
  }
  
  interface CarJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CarItem[]
  }

  interface BookingItem {
    _id: string;
    user: string;
    car: string;
    provider: string;
    PickUpDate: string;
    DropOffDate: string;
    createdAt: string;
  }