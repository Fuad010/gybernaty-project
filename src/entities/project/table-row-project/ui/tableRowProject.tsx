import { TableRow } from "shared/ui/table-row";
import { FC } from "react";
import { ActionsMenu } from "shared/ui/actions-menu";
import { IProject } from "entities/project/model/types";
import Low from 'shared/assets/icons/full_battery_status_low.svg';
import Medium from 'shared/assets/icons/full_battery_status_medium.svg';
import High from 'shared/assets/icons/full_battery_status_high.svg';

interface Props {
  project: IProject;
}

export const TableRowProject: FC<Props> = ({ project }) => {
  const priorityIcon = () => {
    switch (project.priority) {
      case 1:
        return <img src={Low} alt="Low Priority" />;
      case 2:
        return <img src={Medium} alt="Medium Priority" />;
      case 3:
        return <img src={High} alt="High Priority" />;
      default:
        return null;
    }
  };

  return (
    <TableRow
      gridColumnsCss="4fr 1fr 0.5fr 1.5fr 1.5fr 0.5fr"
      columns={[
        project.title,
        project.status,
        priorityIcon(),
        project.lead,
        project.targetDate.toLocaleDateString("ru-RU"),
      ]}
      actions={<ActionsMenu />}
    />
  );
};
