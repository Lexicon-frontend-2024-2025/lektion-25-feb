interface Owner {
    name: string,
    lastName: string,
    phoneNumber: string
}
export interface Dog {
    name: string;
    sex: string,
    breed: string,
    img: string,
    present: boolean,
    age: number,
    chipNumber: string,
    owner: Owner
}