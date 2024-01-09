import { Type } from '../../types';
import { useState } from "react";
import GamingSections from "../gamingSections/gamingSections";
import './playingField.css';

const createItems = (): Type[] => {
    const items: Type[] = [];

    for (let i = 0; i < 36; i++) {
        items.push({
            hasItem: false,
            clicked: false
        });
    }
    const random = Math.floor(Math.random() * 36);
    items[random].hasItem = true;
    return items;
};

const PlayingField: React.FC = () => {
    const [items, setItems] = useState<Type[]>(createItems());
    const [attempts, setAttempts] = useState<number>(0);

    const clickCheck = (index: number) => {
        const newItems = [...items];
        newItems[index].clicked = true;
        setItems(newItems);
        setAttempts(newAttempts => newAttempts + 1);
    };

    const reset = () => {
        setItems(createItems());
        setAttempts(0);
    }

    return (
        <div className='game-field'>
            <div className='attempts'>Попытки: {attempts}</div>
            <div className='block'>
                {items.map((item, index) => (
                    <GamingSections
                        key={index}
                        hasItem={item.hasItem}
                        clicked={item.clicked}
                        onClick={() => clickCheck(index)}
                    />
                ))}
            </div>
            <div className="btn btn-two">
            <button className='main-btn' onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default PlayingField;
