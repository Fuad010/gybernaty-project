export interface IProject{
    id: string;
    title: string;
    status: 'TO DO' | 'IN PROGRESS' | 'DONE';
    priority: number;
    lead: string;
    targetDate: Date;
    isInvited?: boolean;
}