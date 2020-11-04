import React from 'react';
import Bar from '@/components/general-chart/Bar';
import LineGrid from '@/components/lineGrid/LineGrid';
import {ShadowCartDecorator} from '@/components/Decorator';

const MonthReportSingleDemo = ({
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

    newLegend.data=['数量统计']

    const xAxisData = {
        title:{
            text: '数量统计',
        },
        color: ['#61A0A8'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['数量统计']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '7月', '7月', '7月'],
                axisTick: {
                    alignWithLabel: true
                }
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
                barWidth: '40%',
                data: [10, 52, 200, 334, 390, 330, 220, 20, 100, 500],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                    }
                },
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

export default MonthReportSingleDemo
