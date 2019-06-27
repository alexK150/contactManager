import React, {Component} from 'react';
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Alex Hitch',
                email: 'ahitch@gmail.com',
                phone: '1111-111-111'
            },
            {
                id: 2,
                name: 'Karen Will',
                email: 'kwill@gmail.com',
                phone: '2222-222-222'
            },
            {
                id: 3,
                name: 'Salam Alekym',
                email: 'salekym@gmail.com',
                phone: '3333-333-333'
            }
        ]
    };


    render() {
        const {contacts} = this.state;
        return (
            <div>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        />
                ))}
            </div>
        );
    }
}


export default Contacts;