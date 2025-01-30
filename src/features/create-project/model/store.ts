import { createStore, createEvent } from "effector";
import { IProject } from "entities/project/model/types";

export const setFormData = createEvent<Partial<IProject>>();
export const resetForm = createEvent();
export const submitForm = createEvent();

export const $createProjectForm = createStore<Partial<IProject>>({
  title: "",
  status: "TO DO",
  priority: 1,
  lead: "",
  targetDate: new Date(),
})
  .on(setFormData, (state, payload) => ({ ...state, ...payload }))
  .reset(resetForm);
