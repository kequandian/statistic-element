import React from 'react';
import Bar from '@/components/general-chart/Bar';
import LineGrid from '@/components/lineGrid/LineGrid';
import {ShadowCartDecorator} from '@/components/Decorator';

const MonthReportForDoubleLineDemo = ({
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

    // console.log('dataList = ', dataList)

    newLegend.data=['数量统计', '预算统计']

    const xAxisData = {
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '数量统计',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '预算统计',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [
                        {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                        {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    }

    const barProps = {
        levelDisplay: false,
        title: title,
        axis: newLegend,
        series : dataList,
        echart:xAxisData
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

export default MonthReportForDoubleLineDemo
