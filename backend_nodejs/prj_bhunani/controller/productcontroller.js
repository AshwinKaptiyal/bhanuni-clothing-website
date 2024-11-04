const {db} = require('../db/dbconnector')

const isDateInRange = (date, startDate, endDate) => {
  const targetDate = new Date(date).toISOString().split('T')[0];
  return (targetDate >= new Date(startDate).toISOString().split('T')[0] && targetDate <= new Date(endDate).toISOString().split('T')[0]);
};
const parseDate = (dateStr) => {
  return new Date(dateStr);
};
const getSaleReports = (req,res)=>{  
  db.query("select * from orders", (err, result)=>{
    const { start_date, end_date } = req.body;

  
    // Validate date format
    const startDate = parseDate(start_date);
    const endDate = parseDate(end_date); 
    if (isNaN(startDate) || isNaN(endDate)) {
      return res.status(400).json({ error: "Invalid date format. Use YYYY-MM-DD" });
  }

  // Filter orders based on delivery_date
  const filteredOrders = result.filter(item => isDateInRange(item.delivery_date, start_date, end_date))
  .map(({ delivery_date, total_price }) => ({
    
    delivery_date,
    total_price,
  }));

  res.json(filteredOrders);

  })
   
 }

const getProductDetails = (req,res)=>{
  db.query("select * from product", (err, result)=>{
       //console.log("Result ",result)
       const res1 = result.map(item => {
          return {
            date: item.created_at,
            value: item.brand
          };
        });
       res.send(res1)
   
     })  
}
const productSalesReport= async(req,res)=>{
  const { start_date, end_date } = req.body;
  const startDate = parseDate(start_date);
    const endDate = parseDate(end_date); 
    if (isNaN(startDate) || isNaN(endDate)) {
      return res.status(400).json({ error: "Invalid date format. Use YYYY-MM-DD" });
  }
  const sql = `
  SELECT 
    orders.order_id, 
    orders.total_item, 
    orders.total_price,
    orders.total_discounted_price,
    orders.delivery_date,
    'N/A' AS vendor,
    'N/A' AS type,
    'N/A' AS tax,
    'N/A' AS order_return,
    product.title
FROM 
    orders
INNER JOIN 
    product ON product.id = orders.order_id
WHERE 
    orders.delivery_date >= ? AND orders.delivery_date <= ?`
 

  db.query(sql, [start_date, end_date], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Database query error' });
    }

    const mergedOrders = Object.values(
      results.reduce((acc, order) => {
        const { order_id, total_item, total_price, total_discounted_price, vendor, type, title } = order;
        if (!acc[order_id]) {
          acc[order_id] = { ...order, net_sale: total_price - total_discounted_price };
        } else {
          acc[order_id].total_item += total_item;
          acc[order_id].total_price += total_price;
          acc[order_id].total_discounted_price += total_discounted_price;
          acc[order_id].net_sale += total_price - total_discounted_price;
        }
        return acc;
      }, {})
    );
    console.log('rrrrrrrrr   ',mergedOrders)
  res.json(mergedOrders);
  });


  /*
const columns = ["order_id","total_item","total_price","total_discounted_price"];
 

  // Sanitize selected columns for the SQL query
  const selectedColumns = columns.map((col) => db.escapeId(col)).join(',');
 

  // SQL query to select products within the date range
  const sql = `
    SELECT ${selectedColumns} FROM orders
     WHERE delivery_date >= ? AND delivery_date <= ?
     INNER JOIN 
      orders 
    ON 
      product.id = orders.id
    
  `;

  db.query(sql, [start_date, end_date], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(results);
  });
  */
}
module.exports = {getProductDetails, getSaleReports, productSalesReport}