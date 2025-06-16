<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables, ChartDataLabels); // 一定要註冊！

export default {
  name: "PieChart",
  data() {
    return {
      chartInstance: null,
    };
  },
  mounted() {
    const ctx = this.$refs.chartCanvas.getContext("2d");
    this.chartInstance = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["女性", "男性"],
        datasets: [
          {
            data: [11.2, 12.8],
            backgroundColor: ["#ffaf00", "#ba6000"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        layout: {
          padding: { left: 0, right: 0, top: 0, bottom: 0 },
        },
        animation: {
          animateRotate: true,
          animateScale: true,
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              padding: 16,
              color: "#534741",
              font: { size: 16, style: "normal" },
            },
          },
          tooltip: {
            enabled: false,
          },
          datalabels: {
            color: "#000",
            font: {
              size: 14,
              weight: "bold",
            },
            formatter: (value, context) => {
              // 計算總和後顯示百分比
              const sum = context.chart.data.datasets[0].data.reduce(
                (a, b) => a + b,
                0
              );
              const percentage = ((value / sum) * 100).toFixed(1);
              return `${percentage}%`;
            },
          },
        },
      },
      plugins: [ChartDataLabels], // 👈 加入這一行
    });
  },
};
</script>

<style scoped></style>
