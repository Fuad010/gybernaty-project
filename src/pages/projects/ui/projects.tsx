import { Table } from "widgets/table"

type ExampleNames = string[]

export const Projects = () => {
    const columnNames: ExampleNames = ["Title", "Status", "Priority", "Lead", "Target date", "Actions"]

    return(
        <Table columns={columnNames} gridColumnsCss={"4fr 1fr 0.5fr 1.5fr 1.5fr 0.5fr"}  />
    )
}