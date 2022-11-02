import { IItemData } from './data-item-intarface';

const toDo: IItemData[] = [
    {
        content: 'shopping',
        number: 0,
        perentList: 'toDo',
    },
    {
        content: 'visit to petsvet',
        number: 1,
        perentList: 'toDo',
    },
    {
        content: 'visit to the doctor',
        number: 2,
        perentList: 'toDo',
    },
];

const done: IItemData[] = [
    {
        content: 'going to the cinema',
        number: 0,
        perentList: 'Done',
    },
    {
        content: 'omething else',
        number: 1,
        perentList: 'Done'
    }
];

export { toDo, done };