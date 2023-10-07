# Cheat Sheet

1. Initialize project and structure
2. Setup dev environment
3. Install and setup express
   * add static middleware
   * add body parser
   * add routes
4. Add static resources
5. Add views folder with ready htmls
6. Add express-handlebars view engine
   * install
   * add to express
   * config extension
   * config views folder
   * add main layout
   * add partials folder
   * render homepage
   * fix static paths
   * render home page
7. Add controllers folder with home controller
8. Add database
   * install mongoose
   * connect database
9. Authentication
   * add user controller
   * add controller to routes
   * fix header navigation to login, register and logout
   * render login page
   * render register page
10. Add User model
   * add unique index for username
   * validate repeat password
11. Modify login and register forms
12. Add login and register post actions
13. Add user manager
   * require in user controller
   * add register method 
   * validate if user already exists
14. Hash password
   * install bcrypt
   * hash password
15. Login
   * Find user by username
   * Validate password with hash
16. Generate jwt token
   * install jsonwebtoken
   * promisify jsonwebtoken
   * create secret
   * generate token in manager.login
17. Return token in cookie
   * install cookie parser
   * config cookie parser