SELECT picture
FROM users
WHERE authid = $1
RETURNING picture;