import { Channel } from "./channel";

export class Experts {
    "id": string;
    "company": string;
    "firstName": string;
    "lastName": string;
    "title": string;
    "profileUrl": string;
    "channels": Array<Channel>;
}