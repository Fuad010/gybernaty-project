import { Table } from "widgets/table"

type ExampleNames = string[];

export const Invites = () => {
    const columnNames: ExampleNames = ["Title", "Lead", "Actions"];

    return (
        <Table gridColumnsCss={"8fr 2fr 2fr"} columns={columnNames} />
    );
};