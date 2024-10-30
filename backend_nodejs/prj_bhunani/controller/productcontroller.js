const {db} = require('../db/dbconnector')

const isDateInRange = (date, startDate, endDate) => {
  const targetDate = new Date(date).toISOString().split('T')[0];
  console.log(targetDate , new Date(endDate).toISOString().split('T')[0], targetDate == new Date(startDate).toISOString().split('T')[0])
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
module.exports = {getProductDetails, getSaleReports}