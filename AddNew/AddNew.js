import { useState } from 'react';
import './AddNew.css';

import Ueberschrift from '../Ueberschrift/Ueberschrift';
import Absatz from '../Absatz/Absatz';
import Btn from '../Btn/Btn';

const AddNew = props => {
    let [numComponents, setNumComponents] = useState(0);

    const createAbsaetze = () => {
        const components = [];
        for (let i = 0; i < numComponents; i++) {
            components.push(<Absatz content={`Dies ist Absatz No ${i + 1}`} />);
        }
        return components;
    }

    const inkrement = () => setNumComponents(numComponents + 1);

    return (
        <div className="container AddNew">
            <Ueberschrift content="Add new by Click" />

            <Btn content="Add" callback={inkrement} />

            {createAbsaetze()}

        </div>
    )
}

export default AddNew;