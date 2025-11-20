# Bobyard Takehome Project

This project is a full-stack application using **Django + Django REST Framework** for the backend and **React (Vite + TypeScript)** for the frontend. It includes a simple comments feature with list, post, and edit functionality.

---

## Prerequisites

* Python 3.13+
* Node.js 20+ and npm
* Git

---

## 1. Clone the repository

```bash
git clone https://github.com/brtsai/bobyard-take-home.git
cd bobyard-take-home
```

---

## 2. Set up the Django backend

Create the Python Virtual Environment

```bash
cd myproject

# Create virtual environment
python3 -m venv venv
source venv/bin/activate
```

Install Dependencies and run server

```bash
# Upgrade pip
pip install --upgrade pip

# Install dependencies
pip install -r requirements.txt  # or: pip install django djangorestframework django-cors-headers

# Apply database migrations
python manage.py makemigrations
python manage.py migrate

# Run the Django server
python manage.py runserver
```

* Django API will be available at `http://127.0.0.1:8000/api/`
* Example endpoints:

  * `GET /api/comments/` – list all comments
  * `POST /api/comments/` – create a new comment
  * `PATCH /api/comments/<id>/` – edit a comment

> Make sure to keep the backend server running for the frontend to work.

---

## 3. Set up the React frontend

```bash
# Go to frontend folder
cd frontend

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

* Frontend app will be available at `http://localhost:5173/`

---

## 4. Notes

* The backend uses SQLite by default. All data is stored in `db.sqlite3`.
* CORS is enabled for development via `django-cors-headers`.
* API URL in `frontend/src/api/comments.ts` is set to `http://127.0.0.1:8000/api/comments/`.
* Edit and add comments from the React app interface.

---

## 5. Stopping the servers

* **Django**: `CTRL+C` in the terminal where `python manage.py runserver` is running
* **React (Vite)**: `CTRL+C` in the terminal where `npm run dev` is running

---

## 6. Folder structure

```
bobyard-take-home/
├─ api/
│  ├─ models.py
│  ├─ serializers.py
│  ├─ views.py
│  ├─ urls.py
├─ myproject/
│  ├─ settings.py
│  ├─ urls.py
├─ db.sqlite3
├─ manage.py
├─ frontend/
│  ├─ src/
│  │  ├─ App.tsx
│  │  ├─ CommentsList.tsx
│  │  ├─ api/comments.ts
│  │  ├─ main.tsx
│  ├─ index.html
│  ├─ package.json
```

---

## 7. Troubleshooting

* **`ModuleNotFoundError` in Django**: Make sure your virtual environment is activated (`source venv/bin/activate`) and dependencies installed.
* **Frontend cannot fetch API**: Ensure Django server is running at `127.0.0.1:8000`.
* **CORS issues**: Confirm `corsheaders` middleware is added in `settings.py`.
* **Database errors**: Run `python manage.py migrate` to create missing tables.
