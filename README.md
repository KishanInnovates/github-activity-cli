# GitHub Activity CLI 🚀

A simple command-line tool to fetch and display a GitHub user's recent activity in the terminal.

## 📌 Features

✅ Fetches recent GitHub activity for a given username  
✅ Supports **event filtering** (`--filter <type>`)  
✅ Limits the number of displayed events (`--limit <num>`)  
✅ Implements **caching** to reduce API calls  
✅ Fast and lightweight

---

## 🚀 Installation

1️⃣ Clone the repository:

```sh
git clone https://github.com/KishanInnovates/github-activity-cli.git
cd github-activity-cli
```

2️⃣ Install dependencies:

```sh
npm install
```

3️⃣ Build the TypeScript files:

```sh
npm run build
```

4️⃣ Make the CLI globally executable:

```sh
npm link
```

---

## 🛠️ Usage

### 🔍 **Basic Usage**

Fetch the recent GitHub activity of a user:

```sh
github-activity <username>
```

**Example:**

```sh
github-activity KishanInnovates
```

### 🎯 **Filter by Event Type**

Show only **push events**:

```sh
github-activity <username> --filter push
```

### 📊 **Limit the Number of Events**

Show **10 most recent events**:

```sh
github-activity <username> --limit 10
```

### 🚀 **Combine Options**

```sh
github-activity <username> --filter push --limit 5
```

---

## 🔥 Extra Features

✅ **Caching**: Stores the last fetched activity in `cache.json` to prevent excessive API calls.  
✅ **Fast Execution**: Uses local cache to improve speed.
