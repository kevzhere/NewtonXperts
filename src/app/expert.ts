import { Channel } from './channel';

export class Expert {
    'id': string;
    'company': string;
    'firstName': string;
    'lastName': string;
    'title': string;
    'profileUrl': string;
    'channels': Array<Channel>;
}
