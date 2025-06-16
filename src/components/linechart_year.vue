<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

export default {
  name: "lineChart",
  data() {
    return {
      chartInstance: null,
    };
  },
  mounted() {
    Chart.register(...registerables); // 註冊所有元件（必要）

    const ctx = this.$refs.chartCanvas.getContext("2d");
    this.chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "0歲",
          "10歲",
          "20歲",
          "30歲",
          "40歲",
          "50歲",
          "60歲",
          "70歲",
          "80歲",
          "90歲",
        ],
        datasets: [
          {
            data: [30, 45, 60, 15, 18, 20, 15, 18, 20, 15],
            label: "借閱數量(台）",
            borderColor: "#ba6000",
            backgroundColor: "#ba6000",
            pointRadius: 4,
            pointHoverRadius: 4,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        elements: {
          line: {
            tension: 0,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              padding: 16,
              color: "#534741",
              font: {
                size: 16,
                style: "normal",
              },
            },
          },
          tooltip: {
            mode: "point",
            backgroundColor: "#534741",
            titleColor: "#222222",
            bodyColor: "#ffffff",
            titleAlign: "center",
            bodyAlign: "center",
            titleFont: {
              size: 14,
              weight: "bold",
            },
            bodyFont: {
              size: 13,
            },
            padding: 10,
            displayColors: false,
            callbacks: {
              label: function (context) {
                return ` 借閱數：${context.parsed.y} 台`;
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#534741",
              font: {
                size: 14,
              },
            },
            grid: {
              color: "#a3948b",
            },
          },
          y: {
            ticks: {
              color: "#534741",
              font: {
                size: 14,
              },
            },
            grid: {
              color: "#a3948b",
            },
          },
        },
      },
    });
  },
};
</script>

<style scoped></style>
