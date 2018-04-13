UPDATE users 
SET name = $1, email = $2
WHERE user_id = $3;