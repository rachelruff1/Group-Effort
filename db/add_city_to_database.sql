INSERT INTO city ( city_name, state, country, lat_lng, place_id, start_date, end_date, trip_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURN trip_id;
