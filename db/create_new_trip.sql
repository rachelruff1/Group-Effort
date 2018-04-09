INSERT INTO trip ( trip_name, start_date, end_date, user_id ) VALUES ($1, $2, $3, $4) RETURN trip_id;
