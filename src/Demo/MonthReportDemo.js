import React from 'react';
import Bar from '@/components/general-chart/Bar';
import LineGrid from '@/components/lineGrid/LineGrid';
import {ShadowCartDecorator} from '@/components/Decorator';

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
    icon
}) => {

    let newLegend = {type:'category', data:[]};
    let dataList = [];
    let unit = '';

    if(icon && Array.isArray(icon) && icon.length > 0){
        unit = icon[0].value
    }

    if(rates && rates.length > 0) {
        if(rates && rates.length > 0){
            rates.map((item,index) => {
                newLegend.data.push(item.name);
                const dataItem = {};
                dataItem.name = item.name;
                dataItem.barMaxWidth = '30';
                dataItem.markLine = {data:[]};
                const valueList = [];
                const valueListItem = {unit, value: item.value};
                valueList.push(valueListItem);
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

    
    const lineGridProps = {span:24}

    return (
        <LineGrid lineGridProps={lineGridProps}>
            <ShadowCartDecorator>
                <Bar {...barProps}/>
            </ShadowCartDecorator>
        </LineGrid>
    )
}

export default MonthReportDemo
