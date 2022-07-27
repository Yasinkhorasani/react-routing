import './KlickZufall.css';
import Absatz from '../Absatz/Absatz'
import Ueberschrift from '../Ueberschrift/Ueberschrift'
import Btn from '../Btn/Btn'

import { useState} from 'react';

const KlickZufall = props => {

    let [zufall, setZufall] = useState(~~(Math.random() * 100));

    const newRandom = () => {
        // Die setZufall-Funktion des State bekommt den neuen Wert für den State übergeben und 
        // überchreibt die Variable unter Berücksichtigung des Lebenszyklus
        setZufall(~~(Math.random() * 100));
    }

    return (
        <div className="KlickZufall">
            <Ueberschrift content="Klick Zufall" />
            <Absatz content={zufall} />

            <Btn callback={newRandom} content="neuer Zufall" />

        </div>

    )
}

export default KlickZufall;