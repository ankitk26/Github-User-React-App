
# Github-User

View a Github user and its repos by entering the user's username

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" /> &nbsp; &nbsp; <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white "/> &nbsp; &nbsp; <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" />


## Demo

View the site from the [link](https://react-github-user.web.app/) given.


## Features

- Search user by username
- View user's profile (such as followers, following, location, company, number of repositories, etc)
- View user's repositories
- Copy repo's clone URL to clipboard
- Pagination of repositories
- Redirect to repository's link after clicking the title
- Deployed on Firebase


## Run Locally


**Step 1: Clone the project**

```bash
git clone https://github.com/ankitk26/Github-User-React-App.git
```

**Step 2: Go to the project directory**

```bash
cd my-project
```

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Start the server** 

```bash
npm start
```

## API Reference

#### Get user profile

```http
GET https://api.github.com/users/${username}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User's username |

#### Get user's repos

```http
GET https://api.github.com/users/${username}/repos?page=${page}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. User's username |
| `page`      | `string` | **Required**. If available then repos list of that page |

