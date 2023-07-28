# gigih-midterm

## Database Structure

![Database Structure](assets/db.png)

There's 3 table in this database, whic is `videos`, `products`, and `comments`. Im not using `users` table yet, because i want to make it simple, like the requirement, where i just have to input the username directly in the comment form.

## API Documentation

### Videos

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| POST   | /videos  | Create new video |
| GET    | /videos  | Get all videos   |

#### POST /videos

Object
    
    ```json
    {
    "thumbnail": "https://www.google.com",
    "title": "Test"
    }
    ```

### Comments

| Method | Endpoint    | Description        | 
| ------ | ----------- | ------------------ |
| POST   | /comments   | Create new comment |
| GET    | /comments   | Get all comments   | 

### Products

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| POST   | /products | Create new product|
| GET    | /products | Get all products  |

