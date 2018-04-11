UPDATE trip 
Set trip_name = $2, start_date = $3, end_date = $4
WHERE trip_id = $1;