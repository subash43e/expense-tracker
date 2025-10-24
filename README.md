# Expense Tracker CLI

A simple command-line interface (CLI) tool for tracking your expenses.

This project idea is from [roadmap.sh](https://roadmap.sh/projects/expense-tracker).

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/subash43e/expense-tracker.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd expense-tracker
    ```
3.  Install the dependencies:
    ```bash
    npm install -g
    ```
4.  Link the package to use the CLI globally:
    ```bash
    npm link  -g
    ```

## Usage

You can use the `expense-tracker` command to manage your expenses.

### Add a new expense

```bash
expense-tracker add -d "Groceries" -a 50
```

### List all expenses

```bash
expense-tracker list
```

### Get a summary of expenses

```bash
expense-tracker summary
```

You can also filter the summary by month:

```bash
expense-tracker summary -m 10
```

### Delete an expense

```bash
expense-tracker delete -i 1
```

## Dependencies

*   [commander](https://www.npmjs.com/package/commander): For creating the CLI.
*   [easy-table](https://www.npmjs.com/package/easy-table): For displaying the expenses in a table format.
