import { TableRow } from "shared/ui/table-row";
import { FC } from "react";
import { IProject } from "entities/project/model/types";

interface Props {
  project: IProject;
}

export const TableRowInvite: FC<Props> = ({ project }) => {

  return (
    <TableRow
      gridColumnsCss="6fr 4fr 2fr 2fr"
      columns={[project.title, project.lead]}
      id={project.id}
    />
  );
};
