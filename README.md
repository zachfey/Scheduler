# Scheduler
## To run:

cd scheduler

npm install

npm run seed

npm start

## Description
A scheduling application for Raft One. Future functionality will include the ability to export schedule in a format compatible with payroll.

For now, login with username: 'Zachary' and password: 'zachary'. There is no signup as it will be a corporate app and signup should not be available to anybody. In the future, an admin dashboard will be included for the administrator to manage users and permissions.

## Motivation
One of my good friends owns a whitewater rafting company, Raft One. I asked him if there was any sort of challenges that his company faces from a managerial perspective. He told me that they currently do all the scheduling with a Word Document, and he'd like to improve that process. I decided that I would help him out by writing a web application which makes the scheduling process more efficient. Instead of worrying about the format of the document, this application will do it all for him. Additionally, the application will have the ability to export the data in a format that is easily imported into the payroll system.

## Results
Currently, a working version of the app is complete. The user is able to modify the schedules as needed, and the schedules are stored in a database. However, there are still several features to be included before the final release (see Improvements).

## Work Load
Scheduler is a solo project completed entirely by me.

## Challenges
Deployment to Heroku is currently giving me the most trouble. I really need to take the time to understand the deployment process: when deployment scripts are called, what do they need to do, what build packs do, etc.

Another challenge I faced was having the authentication persist accross sessions and page refreshes. Initially, an easy solution was to use client-side storage, but I decided that wouldn't be secure. Eventually, I was able to use a session stored in MongoDB to keep persistent authentication on the server-side.

## Improvements
The app needs better authentication:
 - Check the database to ensure a given username is not already taken. 
 - Impose restrictions on the simplicity of the passwords.
 - Employ user account permissions (read, write, create users) and offer a dashboard to make changes
 - Include a password reset ability
 
Additional features:
- Export week data in a format compatible with the payroll application

## Technologies used:
- Axios
- Bcrypt
- Bootstrap
- Mongo
- NodeJS
- Express
- MomentJS
- Mongoose
- PassportJS
- ReactJS
