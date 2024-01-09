import {Type} from '../../types';
import {useState} from "react";

const createItems = (): Type => {
    const items: Type = [];

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
    const [items, setItems] = useState<Type>(createItems());
    const [attempts, setAttempts] = useState<number>(0);

    const clickProcessing = (index: number) => {
        const newItems = [...items];
        newItems[index].clicked = true;
        setItems(newItems);
        setAttempts(newAttempts => newAttempts + 1);
    };

    const reset = () => {
        setItems(createItems());
        setAttempts(0);
    }


};

export default PlayingField;