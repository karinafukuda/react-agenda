import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';

const DAYS_OF_WEEK = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const useStyles = makeStyles({
  root: {
    height: '100%',
  },

  table: {
    minHeight: '100%',
    '& td ~ td, & th ~ th ': {
      borderLeft: '1px solid rgb(224,224,224)',
    },
  },
});

export function CalendarScreen() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={'div'}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {DAYS_OF_WEEK.map(day => (
              <TableCell align="center" key={day}>
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {DAYS_OF_WEEK.map(day => (
              <TableCell align="center" key={day}>
                x
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {DAYS_OF_WEEK.map(day => (
              <TableCell align="center" key={day}>
                x
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {DAYS_OF_WEEK.map(day => (
              <TableCell align="center" key={day}>
                x
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
