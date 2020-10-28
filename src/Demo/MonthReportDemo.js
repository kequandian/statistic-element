import React from 'react';
import Bar from '@/components/general-chart/Bar';

const MonthReportDemo = ({
    identifier,
    field,
    rates,
    name,
    pattern,
    tl,
    title,
    chart,
    span,
}) => {

    let newLegend = {type:'category', data:[]};
    let dataList = [];
    if(rates && rates.length > 0) {
        if(rates && rates.length > 0){
            rates.map((item,index) => {
                newLegend.data.push(item.name);
                const dataItem = {};
                dataItem.name = item.name;
                dataItem.barMaxWidth = '45';
                dataItem.markLine = {data:[]};
                const valueList = [];
                valueList.push(item.value);
                dataItem.data = valueList;
                dataList.push(dataItem);
            })
        }
    }

    const barProps = {
        levelDisplay: false,
        title: title,
        axis: newLegend,
        series : dataList
    }
    

    return (
        <Bar {...barProps}/>
    )
}

export default MonthReportDemo