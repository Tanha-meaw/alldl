
# AllDL API

A simple Express API that acts as a proxy for fetching data from URLs.

## Features
- Fetch data from any URL
- CORS enabled
- Simple GET request interface

## Installation

### Clone the Repository
```bash
git clone https://github.com/yourusername/alldl.git
cd alldl
```

### Install Dependencies
```bash
npm install
```

## Usage

Send GET requests to `/alldl?url=YOUR_URL` to fetch data from the specified URL.

Example:
```bash
curl "http://your-api.com/alldl?url=https://example.com"
```

## Local Development
1. Start the server:
```bash
npm start
```
2. The API will be available at `http://localhost:3000`

## Hosting on Replit
1. Import this repository to Replit
2. Click on "Run" to start the server
3. Your API will be available at your Replit URL

## Environment Variables
- `PORT`: Default is 3000

## Author
Dipto

## License
MIT
