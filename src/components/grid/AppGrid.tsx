import React from 'react';
import styles from './AppGrid.module.scss';

interface IEmptyTableRowProps {
  rowSpan?: number;
}

const EmptyTableRow: React.FC<IEmptyTableRowProps> = () => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

const AppGrid = () => {
  return (
    <div className={styles.app_grid}>
      <table>
        {[...Array(34).keys()].map((item) => {
          // if (i == 8 || i == 9) return <EmptyTableRow rowSpan={2} key={item} />;
          return <EmptyTableRow key={item} />;
        })}
      </table>
    </div>
  );
};

export default AppGrid;
