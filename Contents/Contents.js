import {useState} from 'react';
import './Contents.css';

import Ueberschrift from '../Ueberschrift/Ueberschrift';
import Absatz from '../Absatz/Absatz';

const Contents = props => {

    let [texte, setTexte] = useState([
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.',
        'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
    ])

    const createAbsaetze = () => 
        texte.map((text, index) => <Absatz content={text} key={index} />)

    return (
        <div className="container Contents">
            <Ueberschrift content="Meine Contents" />

            {createAbsaetze()}

        </div>
    )

}

export default Contents;