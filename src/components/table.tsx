import { useCallback, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface IProps {
  items: Items;
}

interface Items {
  list: number[][];
  out: number[][];
  verSel: number[];
}

const BasicTable = ({ items }: IProps) => {
  const { list, out, verSel } = items;
  const INF: number = 2147483647;

  const [rows, setRows] = useState<
    {
      iter: number | string;
      s: string;
      verSel: number | string;
      LA: number | string;
      SF: number | string;
      DEN: number | string;
      CHI: number | string;
      BOST: number | string;
      NY: number | string;
      MIA: number | string;
      NO: number | string;
    }[]
  >([
    {
      iter: "",
      s: "[]",
      verSel: 0,
      LA: 0,
      SF: 0,
      DEN: 0,
      CHI: 0,
      BOST: 0,
      NY: 0,
      MIA: 0,
      NO: 0,
    },
  ]);

  function createData(
    iter: number | string,
    s: string,
    verSel: number | string,
    LA: number | string,
    SF: number | string,
    DEN: number | string,
    CHI: number | string,
    BOST: number | string,
    NY: number | string,
    MIA: number | string,
    NO: number | string
  ) {
    return { iter, s, verSel, LA, SF, DEN, CHI, BOST, NY, MIA, NO };
  }

  const pushItems = () => {
    setRows([
      createData(
        "Initial",
        "--",
        "--",
        list[0][1] === INF ? "∞" : list[0][1],
        list[0][2] === INF ? "∞" : list[0][2],
        list[0][3] === INF ? "∞" : list[0][3],
        list[0][4] === INF ? "∞" : list[0][4],
        list[0][5] === INF ? "∞" : list[0][5],
        list[0][6] === INF ? "∞" : list[0][6],
        list[0][7] === INF ? "∞" : list[0][7],
        list[0][8] === INF ? "∞" : list[0][8]
      ),
    ]);
    for (let i = 1; i < list.length - 1; i++) {
      setRows((prev) => [
        ...prev,
        createData(
          i,
          `[${out[i - 1].toString()}]`,
          verSel[i],
          list[i][1] === INF ? "∞" : list[i][1],
          list[i][2] === INF ? "∞" : list[i][2],
          list[i][3] === INF ? "∞" : list[i][3],
          list[i][4] === INF ? "∞" : list[i][4],
          list[i][5] === INF ? "∞" : list[i][5],
          list[i][6] === INF ? "∞" : list[i][6],
          list[i][7] === INF ? "∞" : list[i][7],
          list[i][8] === INF ? "∞" : list[i][8]
        ),
      ]);
    }
    setRows((prev) => [
      ...prev,
      createData(
        "",
        `[${out[list.length - 1].toString()}]`,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
    ]);
  };
  useEffect(() => {
    pushItems();
  }, []);
  //   console.log(list);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Iterations</TableCell>
            <TableCell>S</TableCell>
            <TableCell>Vertex Selected</TableCell>
            <TableCell align="right">LA</TableCell>
            <TableCell align="right">SF</TableCell>
            <TableCell align="right">DEN</TableCell>
            <TableCell align="right">CHI</TableCell>
            <TableCell align="right">BOST</TableCell>
            <TableCell align="right">NY</TableCell>
            <TableCell align="right">MIA</TableCell>
            <TableCell align="right">NO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.iter}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.iter}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.s}
              </TableCell>
              <TableCell align="center">{row.verSel}</TableCell>
              <TableCell align="right">{row.LA}</TableCell>
              <TableCell align="right">{row.SF}</TableCell>
              <TableCell align="right">{row.DEN}</TableCell>
              <TableCell align="right">{row.CHI}</TableCell>
              <TableCell align="right">{row.BOST}</TableCell>
              <TableCell align="right">{row.NY}</TableCell>
              <TableCell align="right">{row.MIA}</TableCell>
              <TableCell align="right">{row.NO}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;

// createData(
//   -1,
//   -1,
//   items?.verSel[0],
//   items?.list[0][0],
//   items?.list[0][1],
//   items?.list[0][2],
//   items?.list[0][3],
//   items?.list[0][4],
//   items?.list[0][5],
//   items?.list[0][6],
//   items?.list[0][7]
// ),
