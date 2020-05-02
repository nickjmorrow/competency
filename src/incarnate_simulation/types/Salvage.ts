import { SalvageRarity } from '~/incarnate_simulation';

export type Salvage = {
    name: string;
    salvageRarity: SalvageRarity;
    costInThreads?: number;
    costInEmpyreanMerits?: number;
};
