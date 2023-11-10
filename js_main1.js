<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gantt Chart</title>
  <script src="https://cdn.dhtmlx.com/gantt/edge/dhtmlxgantt.js"></script>
  <link rel="stylesheet" href="https://cdn.dhtmlx.com/gantt/edge/dhtmlxgantt.css">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div id="gantt_chart" style="width: 100%; height: 100%;"></div>

  <script>
    gantt.config.xml_date = "%Y-%m-%d %H:%i";

    function init() {
      gantt.init("gantt_chart");
      gantt.parse(getData());
    }

    function getData() {
      // Replace this with your own data
      const start_date = new Date(prompt("Enter project start date (YYYY-MM-DD):"));
      const end_date = new Date(prompt("Enter project end date (YYYY-MM-DD):"));

      const data = {
        data: [
          { id: 1, text: "Task 1", start_date, duration: 5 },
          { id: 2, text: "Task 2", start_date: "2023-11-10", duration: 3, parent: 1 }
          { id: 3, text: "Task 3", start_date: "2023-11-13", duration: 2, parent: 1 },
          { id: 4, text: "Task 4", start_date: "2023-11-15", duration: 4 },
        ],
        links: [
          { id: 1, source: 1, target: 2, type: "0" },
          { id: 2, source: 1, target: 3, type: "0" },
          { id: 3, source: 2, target: 4, type: "0" },
        ],
      };

      return data;
    }

    document.addEventListener("DOMContentLoaded", init);
  </script>
</body>
</html>


