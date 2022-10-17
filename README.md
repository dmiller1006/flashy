# flashy

## Flash is a flashcard and trivia application built using React on the front end and Django on the backend.

### Frontend (React)
A series of pages guide the user from a landing page on through the authentication process. API calls are made from a single file, and enable the user to create, read, update and delete flashsets and cards within a flashset.

Users can also create a 'trivy', a set up dynamic trivia questions rendered using the flashcard layout. Users can create these 'trivys' by either selecting random questions, true/false questions, or questions by category and difficulty. Each of these options make API calls to a third-party API using a dynamic API endpoint which can be found in src/api/FlashyAPI.js.

### Backend (Django)
The backend of this application is developed using Django. Django handles user creation and logins using the default User model and default ModelSerializer. Users are assigned tokens which are used to authentication the user.

This Django backend also manages the API for all flashsets and cards specific to a flashset. Default Django models are used to create a one-to-many relationship between the flashsets and the cards, this can be found in triviya_cards_app/models.py. These models also feature Django serializers to handle requests.

#### Goals
- Scoring for both flashsets and trivys
- Create posts to social media, enabling users to forward their score to friends
- A timer, specifically for trivys. Possibly dynamic based on user input.
- Create a random daily trivia upon login
- Allow users to import and export CSV files so that they have a backup of their sets
- Create sets using incoming data, JSON or CSV
