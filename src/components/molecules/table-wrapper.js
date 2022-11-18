import React, { useEffect, useState } from 'react';
import { sortDirectionKeys } from 'constants/etc';
import { Paragraph, Table } from 'components/atoms';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

const defPaginationData = { size: 25, number: 1 };
export const defText = (text, align, isPrice, extraProps = {}, emptyValue) => {
  let rowContent = '';
  if (!text) {
    rowContent = emptyValue ? '' : '-';
  } else {
    rowContent = text;
    if (isPrice) {
      rowContent = isPrice?.onlyLocale
        ? Number(text).toLocaleString()
        : Number(text).toLocaleString(undefined, { minimumFractionDigits: 2 });
    }
  }
  return (
    <Paragraph
      mb={0}
      align={align || 'left'}
      fw={350}
      {...extraProps}
      // text_overflow='ellipsis'
    >
      {rowContent}
    </Paragraph>
  );
};

const convertSortList = list =>
  list
    .map(item =>
      item?.order
        ? `${(item?.column?.sortKey || item?.column?.key)
            .split(',')
            .map(el => `${el}:${sortDirectionKeys[item?.order] || ''}`)
            .join()}`
        : ''
    )
    .join();

const checkSorter = (cols = [], data = []) =>
  cols.map(el => ({
    ...el,
    sorter: data.length ? el?.sorter : false,
  }));

const TableWrapper = ({
  columns = [],
  loading = false,
  total = 0,
  dataSource = [],
  tableExtraProps = {},
  filterContent = '',
  filterData = {},
  getTableData = () => {},
  triggerRequest = false,
  rowSelection = {},
  width,
}) => {
  const [paginationData, setPaginationData] = useState(defPaginationData);
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    checkSorter();
  }, [dataSource]);

  useEffect(() => {
    convertedRequest();
  }, [paginationData, sortData]);

  useEffect(() => {
    if (tableExtraProps?.pagination === false) {
      convertedRequest();
      return;
    }
    if (typeof total === 'number') {
      if (defPaginationData?.number === paginationData?.number) {
        convertedRequest();
      } else {
        setPaginationData(defPaginationData);
      }
    }
  }, [filterData]);

  useEffect(() => {
    if (triggerRequest) {
      convertedRequest();
    }
  }, [triggerRequest]);

  const convertedRequest = () => {
    let params = {};

    const { size, number } = paginationData;

    params = {
      _limit: size,
      _start: number * size - size,
    };
    if (convertSortList(sortData)) {
      // eslint-disable-next-line no-underscore-dangle
      params._sort = convertSortList(sortData);
    }
    Object.keys(filterData).forEach(key => {
      if (filterData[key]) {
        params[key] = filterData[key];
      }
    });

    getTableData(params);
  };

  const handleSortChange = data => {
    setSortData(data.length ? data : [data]);
  };

  return (
    <>
      {/* {filterContent} */}
      <Table
        width={width}
        columns={checkSorter(columns, dataSource)}
        extra='pagination'
        onChange={(a, b, data) => handleSortChange(data)}
        expand_back='#fff'
        rowKey={record => record.id}
        loading={loading}
        cell_padding='15px 20px'
        rowClassName={() => 'rowClassName1'}
        // rowSelection={{
        //   ...rowSelection,
        // }}
        pagination={{
          position: ['bottomCenter'],
          defaultPageSize: 5,
          showSizeChanger: false,
          pageSize: paginationData.size,
          hideOnSinglePage: !dataSource.length,
          current: paginationData.number,
          onChange: (page, size) => setPaginationData({ size, number: page }),
          total: dataSource.length ? total : 0,
          itemRender: (_, type, originalElement) => {
            if (type === 'prev') {
              return <CaretLeftOutlined style={{ color: '#54595F' }} />;
            }

            if (type === 'next') {
              return <CaretRightOutlined style={{ color: '#54595F' }} />;
            }

            return originalElement;
          },
        }}
        dataSource={dataSource}
        {...tableExtraProps}
      />
    </>
  );
};

export default TableWrapper;
