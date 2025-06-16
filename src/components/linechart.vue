<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>
``

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
        labels: ["週一", "週二", "週三", "週四", "週五", "週六", "週日"],
        datasets: [
          {
            data: [30, 45, 60, 15, 18, 20, 15],
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
        plugins: {
          legend: {
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
            titleColor: "#ffffff",
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
              zeroLineColor: "#a3948b",
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
              color: "#000000", // 設為黑色
              zeroLineColor: "#000000", // 同上
            },
          },
        },
      },
    });
  },
};
</script>

<style scoped></style>
