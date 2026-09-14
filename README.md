# IT Management System

**IT Management System** is a centralized IT management platform designed to
manage company IT assets, inventory, assignments, locations, employees,
asset status, and related asset lifecycle activities.

The system is being developed in multiple phases, with **Version 1 (V1)**
focused on **IT Asset Management** and **Version 2 (V2)** planned to introduce
**IT Ticket Management**.

---

## 📌 Current Version

### V1 — IT Asset Management

The current version focuses on managing the organization's IT assets and
related information, including:

- Asset Management
- Inventory Management
- Asset Status & History
- Employee Management
- Organizational Hierarchy
- Location Management
- Asset Categories
- Dashboard & Asset Metrics
- QR Code Labels
- Asset Reports

The core asset management functionality is currently implemented through the
Frontend Portal and Backend API. :contentReference[oaicite:1]{index=1}

---

## 🔮 Planned Version

### V2 — IT Ticket Management

**V2** will extend the platform with an **IT Ticket Management** module for
handling IT support requests and service-related activities.

Planned capabilities may include:

- Ticket Creation & Management
- Issue Tracking
- Ticket Assignment
- Ticket Status & Lifecycle
- Priorities & Categories
- IT Support Queue
- Ticket History
- Comments & Updates
- Resolution Tracking
- Ticket Reporting

> **V2 is planned and is not part of the current V1 implementation.**

---

## 🧩 Project Structure

The project consists of two main applications:

### 🌐 IT Management Portal

**Path:** `portal.it-management-system.com`

**Tech Stack:**

- **TypeScript**
- **Next.js**
- **Tailwind CSS**
- **Redux Toolkit / RTK Query**

**Description:**

The main user-facing frontend application used to manage IT assets,
inventory, employees, locations, reports, and other asset management
features.

---

### 🔌 IT Management API

**Path:** `api.it-management-system.com`

**Tech Stack:**

- **TypeScript**
- **NestJS**
- **TypeORM**
- **PostgreSQL**

**Description:**

The backend API responsible for authentication, authorization, business
logic, data management, asset workflows, reporting, and integrations.

---

## 🚀 Goal

To provide a **secure, scalable, and centralized IT management platform**
that supports the organization's IT operations and can evolve from
**Asset Management in V1** into a broader **IT Service Management platform
in future versions**.

---

## 📁 Folder Structure

```text
.
├── docs/
│   ├── frontend/ # Frontend architecture, features, components, and implementation documentation
│   └── backend/  # Backend architecture, APIs, business logic, and data flow documentation
│
├── portal.it-management-system.com/ # Main user-facing Frontend Portal application
│
└── api.it-management-system.com/    # Backend API for business logic, data management, and integrations
```
