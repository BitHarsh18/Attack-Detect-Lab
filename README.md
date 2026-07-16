# 🛡️ Threat Intelligence Platform (MERN Stack)

A full-stack Threat Intelligence Platform built using the MERN stack to automate the collection, enrichment, storage, and analysis of real-world Indicators of Compromise (IOCs). The platform integrates threat intelligence feeds, provides an interactive SOC dashboard, and enables analysts to search and prioritize threats efficiently.

---

## 📌 Overview

Security Operations Centers (SOCs) rely on threat intelligence feeds to identify malicious IP addresses, domains, URLs, and file hashes. Manually downloading and analyzing thousands of indicators is inefficient and time-consuming.

This project automates that workflow by:

- Collecting threat intelligence from URLHaus
- Normalizing and storing IOCs in MongoDB
- Eliminating duplicate indicators
- Enriching IOCs with Threat Score and Risk Level
- Providing an interactive dashboard for SOC analysts
- Tracking feed synchronization history

---

# 📸 Screenshots

- Dashboard
  <img width="1898" height="953" alt="image" src="https://github.com/user-attachments/assets/a66068b1-7837-4d17-ab45-70592b80ceed" />

- IOC Search
  <img width="1658" height="525" alt="image" src="https://github.com/user-attachments/assets/47ab7d29-5921-4c1b-80f3-912d692db8e7" />
  
- Threat Feed Status
  <img width="1647" height="953" alt="image" src="https://github.com/user-attachments/assets/541220d2-b8be-4344-9ab9-592924ea5ccf" />

- Feed Synchronization
  <img width="1322" height="455" alt="image" src="https://github.com/user-attachments/assets/17f800fe-48ed-43c7-9efb-eae9d4800afa" />

- Feed History
  <img width="1605" height="805" alt="image" src="https://github.com/user-attachments/assets/4480dadc-b509-4bdd-b1ab-e75e24b39254" />

- Threat Analytics
  Comming Soon ......


# ✨ Features

### 🔍 IOC Management

- Store Indicators of Compromise (IOCs)
- Search IOC by value
- REST API support
- Duplicate detection
- Optimized bulk insertion

---

### 🌐 Threat Intelligence Feed

- URLHaus Feed Integration
- Automatic IOC normalization
- Bulk synchronization
- Feed status monitoring
- Feed synchronization history

---

### 📊 Dashboard

- Total IOC statistics
- Severity distribution
- IOC Type Distribution
- Threat Source Analytics
- Recent Threats Table
- IOC Search
- Feed Status
- Feed History

---

### ⚡ IOC Enrichment

Each IOC is automatically enriched with:

- Threat Score
- Risk Level
- Severity
- Threat Source

Example:

| IOC | Severity | Threat Score | Risk Level |
|------|----------|-------------|------------|
| Malicious URL | Critical | 100 | Critical |
| Malicious IP | High | 75 | High |

---

### 📈 Data Visualization

Interactive charts include:

- IOC Type Distribution
- Threat Source Distribution
- Dashboard Statistics

---

### 🔄 Feed Synchronization

The platform supports:

- Manual synchronization
- Automatic duplicate removal
- Feed History
- Synchronization statistics
- Inserted IOC count
- Skipped IOC count

---

## 🏗️ Project Architecture

```
                    URLHaus Feed
                          │
                          ▼
                  Feed Manager
                          │
                          ▼
                Feed Sync Service
                          │
                          ▼
                     MongoDB
                          │
        ┌─────────────────┴─────────────────┐
        ▼                                   ▼
 Dashboard API                      Search API
        ▼                                   ▼
                React Dashboard
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Axios
- React Router
- Chart.js
- React Hot Toast
- React Icons

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios
- Node Cron

---

## Threat Intelligence

- URLHaus Threat Feed

---

# 📂 Project Structure

```
ThreatIntelPlatform/

├── backend/
│
│   ├── src/
│   │
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── feeds/
│   ├── models/
│   ├── middleware/
│   └── utils/
│
└── frontend/
    │
    ├── src/
    │
    ├── pages/
    ├── components/
    ├── services/
    ├── layout/
    └── assets/
```

---

# 📊 Dashboard Modules

## Dashboard

Displays:

- Total IOCs
- Critical Threats
- High Threats
- Medium Threats
- Low Threats

---

## IOC Search

Search an IOC by:

- IP Address
- Domain
- URL

Returns:

- Severity
- Threat Score
- Risk Level
- Source

---

## Recent Threats

Displays:

- Latest IOCs
- Severity
- Threat Score
- Risk Level
- Source

---

## Threat Feeds

Displays:

- Feed Status
- Indicators Count
- Last Synchronization Time
- Feed History

---

# ⚙️ REST APIs

## Dashboard

```
GET /api/dashboard
```

---

## IOC Search

```
GET /api/iocs/search/:value
```

---

## Recent Threats

```
GET /api/iocs/recent
```

---

## Feed Status

```
GET /api/feeds
```

---

## Feed Synchronization

```
POST /api/feeds/sync
```

---

## Feed History

```
GET /api/feeds/history
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/BitHarsh18/Attack-Detect-Lab
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

Example:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---


---

# 🚀 Future Improvements

- MalwareBazaar Integration
- AlienVault OTX Integration
- OpenPhish Integration
- IOC Detail Page
- MITRE ATT&CK Mapping
- IOC Relationship Graph
- User Authentication
- Role-Based Access Control (RBAC)
- Dark Mode
- Email Alerts
- Scheduled Feed Synchronization
- Docker Deployment
- Redis Caching

---

# 🎯 Learning Outcomes

This project helped me understand:

- Threat Intelligence
- IOC Management
- REST API Development
- MERN Stack Development
- MongoDB Optimization
- Feed Synchronization
- Data Enrichment
- Dashboard Design
- Cybersecurity Workflows
- SOC Operations

---

# 👨‍💻 Author

**Harshit Kumar Srivastava**

GitHub: https://github.com/BitHarsh18

---
