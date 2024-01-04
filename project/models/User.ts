export interface userPage {
    results: { name: string }[],
    next: string | null,
    previous: string | null,
}
interface Coordinates {
    lat: number;
    lng: number;
}

interface Address {
    coordinates: Coordinates;
    address: string;
    city: string;
    postalCode: string;
    state: string;
}

interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

interface CompanyAddress {
    coordinates: Coordinates;
    address: string;
    city: string;
    postalCode: string;
    state: string;
}

interface Company {
    address: CompanyAddress;
    department: string;
    name: string;
    title: string;
}

export interface User {
    _id: string;
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    domain: string;
    ip: string;
    macAddress: string;
    university: string;
    ein: string;
    ssn: string;
    userAgent: string;
    address: Address;
    bank: Bank;
    company: Company;
}


