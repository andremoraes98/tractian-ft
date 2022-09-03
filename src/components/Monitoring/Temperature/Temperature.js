import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import TractianContext from '../../../context/TractianContext';
import { useParams } from 'react-router-dom';

function Temperature() {
  const { assets } = useContext(TractianContext);
  const { id } = useParams();
  const { temp: { data, limit }, createdAt } = assets[id - 1];
  const options = {
    accessibility: {
      enabled: true,
      description: 'Gráfico que mostra a média diária de temperatura nominal do ativo',
      keyboardNavigation:{
        enabled: true,
      }
    },
    title: {
      text: 'Temperatura (ºC)'
    },
    subtitle: {
      text: 'Média diária de temperatura nominal do ativo'
    },
    yAxis: {
      title: {
        text: 'ºC'
      }
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Dias do mês'
      },
      type: 'datetime'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: Date.parse(createdAt),
        pointInterval: (24 * 3600 * 1000)
      },
    },
    series: [{
      type: 'line',
      name: 'Temperatura',
      color: '#808080',
      marker: {
        enabled: false,
        symbol: 'circle'
      },
      data
    }, {
      type: 'line',
      name: 'Limite tolerável',
      color: '#ff2020',
      dashStyle: 'LongDashDot',
      marker: {
        enabled: false,
        symbol: 'circle'
      },
      data: limit
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 200
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    },
  };

  return (
    <div id="graphic">
      <HighchartsReact
        highcharts={ Highcharts }
        options={ options }
      />
    </div>
  )
}

export default Temperature;
