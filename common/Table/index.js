import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortType: {
        key: '',
        type: ''
      },
      tableHeaders: [],
      tableData: []
    };

    this.sortData = this.sortData.bind(this);
  }

  componentDidMount() {
    this.setState({
      tableHeaders: this.props.tableHeaders,
      tableData: this.props.tableData
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {tableData} = this.props,
      {sortType} = this.state;

    if (!Object.is(prevProps.tableData, tableData)) {
      this.setState({
        sortType: {
          key: '',
          type: ''
        },
        tableData: tableData
      });
    }

    if (prevState.sortType !== sortType) {
      document.querySelectorAll('.sort-icons').forEach(element => {
        element.classList.remove('active', 'asc', 'dsc');

        if (element.classList.contains(sortType.key)) {
          element.classList.add('active', sortType.type);
        }
      });
    }
  }

  sortData = key => () => {
    const {sortType, tableData} = this.state,
      arrayCopy = [...tableData];

    if (key === 'user_name') {
      arrayCopy.sort((a, b) => {
        if (a[key].split(' ')[1] < b[key].split(' ')[1]) {
          return -1;
        }
        if (a[key].split(' ')[1] > b[key].split(' ')[1]) {
          return 1;
        }
        return 0;
      });
    } else {
      arrayCopy.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    }

    if (sortType.key !== key) {
      this.setState({
        sortType: {
          key: key,
          type: 'dsc'
        },
        tableData: arrayCopy
      });
    } else if (sortType.type === 'dsc') {
      this.setState({
        sortType: {
          key: key,
          type: 'asc'
        },
        tableData: arrayCopy.reverse()
      });
    } else {
      this.setState({
        sortType: {
          key: '',
          type: ''
        },
        tableData: this.props.tableData
      });
    }
  };

  render() {
    const {tableHeaders, tableData} = this.state;

    return (
      <div className="table-container">
        <table className={classnames('table', this.props.classNames)}>
          <thead>
            <tr>
              {tableHeaders.map(header => (
                <th key={header.key}>
                  <button
                    className={classnames(
                      'header-button',
                      header.sortable ? '' : 'unsortable'
                    )}
                    onClick={this.sortData(header.key)}
                  >
                    <div className="header-label">{header.name}</div>
                    {header.key !== '' && (
                      <div className={classnames('sort-icons', header.key)}>
                        <i className="glyphicon glyphicon-triangle-top" />
                        <i className="glyphicon glyphicon-triangle-bottom" />
                      </div>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.populateTableData(tableData)}
            {/* {tableData.map((data, i) => (
              <tr key={i}>
                {Object.keys(data).map((key, j) => (
                  <td key={j} className={key}>
                    {Array.isArray(data[key]) && data[key].length > 1
                      ? data[key].sort().join(', ')
                      : data[key]}
                  </td>
                ))}
                <td className="align-right">{this.props.options}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  classNames: PropTypes.array,
  populateTableData: PropTypes.func,
  tableData: PropTypes.array,
  tableHeaders: PropTypes.array
};

export default Table;
