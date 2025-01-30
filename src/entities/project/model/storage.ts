import { createStore, createEvent } from "effector";
import { IProject } from "./types";

export const addProject = createEvent<IProject>();
export const updateProject = createEvent<Partial<IProject> & {id:string}>();
export const deleteProject = createEvent<string>();

export const $projects = createStore<IProject[]>([
    {
        id:"1",
        title:"Gyber Plan",
        status: 'TO DO',
        priority:2,
        lead:"Maksim Kasparov",
        targetDate: new Date("2024-01-28"),
    }
])

.on(addProject, (state, project)=> [...state, project])
.on(updateProject, (state, updated) => 
    state.map((p)=> (p.id === updated.id ? {...p, ...updated} : p))
)
.on(deleteProject, (state, id) => state.filter((p=>p.id !== id)))