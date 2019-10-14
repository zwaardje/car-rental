import { IconTypes } from '../../atoms';

export type ChipTypes = 'primary' | 'secondary' | 'active';

export interface Chip {
    type: ChipTypes;
    icon: IconTypes;
    label: string | number;
}
