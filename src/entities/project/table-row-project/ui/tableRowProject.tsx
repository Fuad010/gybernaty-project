import { TableRow } from "shared/ui/table-row"
import { IProject } from "entities/project/model/types"
import { FC } from "react";

interface Props{
    project: IProject;
}

export const TableRowProject: FC<Props> = ({project}) =>{
    <TableRow gridColumnsCss={"4fr 1fr 0.5fr 1.5fr 1.5fr 0.5fr"} columns={[project.title project.status]}/>
}