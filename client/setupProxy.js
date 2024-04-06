const express = require('express');
const cors = require('cors');

const app = express();

// Cấu hình CORS
app.use(cors());

// Các tuyến đường và xử lý yêu cầu khác...

app.listen(8800, () => {
  console.log('Server is running on port 8800');
});