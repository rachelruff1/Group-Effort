-- SELECT * FROM city WHERE trip_id = $1;

SELECT c.city_id, c.city_name, c.country, c.end_date, c.lat_lng, c.photo_ref, c.place_id, c.start_date, c.state, c.trip_id, t.trip_name 
FROM city c 
JOIN trip t ON c.trip_id = t.trip_id
WHERE c.trip_id = $1;