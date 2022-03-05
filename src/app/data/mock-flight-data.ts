import { Flight } from '../components/flight';

export class mockFlightData {
  public static mfData: Flight[] = [
    {
      fullName: 'Punyawee Thongklad',
      from: 'Thailand',
      to: 'Japan',
      type: 'One way',
      adults: 1,
      departure: new Date('2565-03-10'),
      children: 2,
      infants: 3,
      arrival: new Date('2568-10-20'),
    },
  ];
}
