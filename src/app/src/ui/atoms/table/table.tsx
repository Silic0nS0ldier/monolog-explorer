import { ComponentChildren, h, JSX } from "preact";

type TableProps = {
    columns?: Iterable<TableColumnProps>,
    header?: TableHeaderProps,
    body: TableBodyProps,
    footer?: TableFooterProps,
};

export function Table(props: TableProps) {
    let columns: null|JSX.Element = null;
    if (props.columns) {
        columns = (
            <TableColumnGroup columns={props.columns} />
        );
    }

    let header: null|JSX.Element = null;
    if (props.header) {
        header = (
            <TableHeader {...props.header} />
        );
    }

    const body = (
        <TableBody {...props.body} />
    );

    let footer: null|JSX.Element = null;
    if (props.footer) {
        footer = (
            <TableFooter {...props.footer} />
        );
    }

    return (
        <table>
            {columns}
            {header}
            {body}
            {footer}
        </table>
    );
}

type TableHeaderProps = {
    rows: Iterable<TableDataRowProps|TableMetaRowProps>,
};

function TableHeader(props: TableHeaderProps) {
    const rows: JSX.Element[] = [];
    for (const row of props.rows) {
        rows.push(
            <TableRow {...row} />
        );
    }

    return (
        <thead>
            {rows}
        </thead>
    );
}

type TableBodyProps = {
    rows: Iterable<TableDataRowProps>,
};

function TableBody(props: TableBodyProps) {
    const rows: JSX.Element[] = [];
    for (const row of props.rows) {
        rows.push(
            <TableRow {...row} />
        );
    }

    return (
        <tbody>
            {rows}
        </tbody>
    );
}

type TableFooterProps = {
    rows: Iterable<TableDataRowProps|TableMetaRowProps>,
};

function TableFooter(props: TableFooterProps) {
    const rows: JSX.Element[] = [];
    for (const row of props.rows) {
        rows.push(
            <TableRow {...row} />
        );
    }

    return (
        <tfoot>
            {rows}
        </tfoot>
    );
}

type TableDataRowProps = {
    key: any,
    cells: Iterable<TableDataCellProps>,
};

type TableMetaRowProps = {
    key: any,
    cells: Iterable<TableDataCellProps|TableHeaderCellProps>,
};

function TableRow(props: TableDataRowProps|TableMetaRowProps) {
    const cells: JSX.Element[] = [];
    for (const cell of props.cells) {
        if (cell.isHeader) {
            cells.push(
                <TableHeaderCell {...cell} />
            );
        } else {
            cells.push(
                <TableDataCell {...cell} />
            );
        }
    }

    return (
        <tr>
            {cells}
        </tr>
    );
}

type TableHeaderCellProps = {
    isHeader: true,
    key: any,
    children: ComponentChildren,
};

function TableHeaderCell(props: TableHeaderCellProps) {
    return (
        <th>
            {props.children}
        </th>
    );
}

type TableDataCellProps = {
    isHeader?: never,
    key: any,
    children: ComponentChildren,
};

function TableDataCell(props: TableDataCellProps) {
    return (
        <td>
            {props.children}
        </td>
    )
}

type TableColumnGroupProps = {
    columns: Iterable<TableColumnProps>
};

function TableColumnGroup(props: TableColumnGroupProps) {
    const columns: JSX.Element[] = [];
    for (const column of props.columns) {
        columns.push(
            <TableColumn {...column} />
        );
    }

    return (
        <colgroup>
            {columns}
        </colgroup>
    );
}

type TableColumnProps = {
    key: any,
    span?: number,
};

function TableColumn(props: TableColumnProps) {
    return (
        <col {...props} />
    );
}
