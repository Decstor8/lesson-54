
export interface Type {
    item: number;
    clicked: boolean;
}

interface PropsSections {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
}

const array = [];
