import { IItemData } from './data-item-intarface';

const toDo: IItemData[] = [
    {
        content: 'shopping',
        id: 0,
        perentList: 'toDo',
    },
    {
        content: 'visit to petsvet',
        id: 1,
        perentList: 'toDo',
    },
    {
        content: 'visit to the doctor',
        id: 2,
        perentList: 'toDo',
    },
];

const done: IItemData[] = [
    {
        content: 'going to the cinema',
        id: 3,
        perentList: 'Done',
    },
    {
        content: 'omething else',
        id: 4,
        perentList: 'Done'
    }
];

export { toDo, done };