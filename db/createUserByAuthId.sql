INSERT INTO users
    (authid,name,email, picture)
VALUES
    ($1, $2, $3, $4)
    RETURN authid, user_id, name, email, picture
    
