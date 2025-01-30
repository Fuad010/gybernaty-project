import { createStore, createEvent } from "effector";
import { IProject } from "entities/project/model/types";

export const addProject = createEvent<IProject>();
export const setFormData = createEvent<Partial<IProject>>();
export const rejectInvite = createEvent<string>();
export const resetForm = createEvent();
export const submitForm = createEvent();
export const acceptInvite = createEvent<string>();

export const $createProjectForm = createStore<Partial<IProject>>({
  title: "",
  status: "TO DO",
  priority: 2,
  lead: "",
  targetDate: new Date(),
  isInvited: false,
})
    .on(setFormData, (state, payload) => ({ ...state, ...payload }))
    .reset(resetForm);

export const $projects = createStore<IProject[]>([
    {
        id:"1",
        title:"Gyber Plan",
        status: 'TO DO',
        priority:2,
        lead:"Maksim Kasparov",
        targetDate: new Date("2024-01-28"),
        isInvited: true,
    }
])
    .on(addProject, (state, project) => [...state, project]) 
    .on(acceptInvite, (state, id) => state.map(project => 
        project.id === id ? { ...project, isInvited: true } : project
    ))
    .on(rejectInvite, (state, id) => state.map(project => 
        project.id === id ? { ...project, isInvited: false } : project
    ));