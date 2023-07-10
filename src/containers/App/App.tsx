import {Card} from 'components/Card/Card';
import {cn} from 'utils/classname';

import '../../styles/root.scss';
import './App.scss';

const block = cn('app');

export function App() {
    return (
        <div className={block()}>
            <Card
                image="https://kartinkin.net/pics/uploads/posts/2022-08/1659673369_52-kartinkin-net-p-ostrova-belogo-morya-priroda-krasivo-foto-55.jpg"
                title="Card title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                link={{text: 'Go somewhere', url: '#'}}
            />
            <Card
                title="Special title treatment"
                text="With supporting text below as a natural lead-in to additional content."
                link={{text: 'Go somewhere', url: '#'}}
            />
        </div>
    );
}
