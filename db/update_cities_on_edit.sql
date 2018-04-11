UPDATE city 
SET start_date = $1, end_date = $2
WHERE city_id = $3;