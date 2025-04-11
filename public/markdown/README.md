# Step 1: Your First Solidity Contract – Hello World

## 🧠 Objective

Understand the basic structure of a Solidity smart contract by creating a simple "Hello, world!" contract.

## 📄 What You'll Learn

-   What `pragma solidity` means
-   The structure of a Solidity contract
-   How state variables work
-   The `public` keyword and how it makes variables accessible

## 🧱 Code Example

```solidity
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Hello, world!";
}
```

## 📝 Breakdown

### 1. `pragma solidity ^0.8.0;`

-   This tells the compiler to use Solidity version 0.8.0 or higher (but less than 0.9.0).
-   It helps avoid compatibility issues with older/newer versions.

### 2. `contract HelloWorld { ... }`

-   A **contract** in Solidity is like a class in other languages.
-   It contains your logic and data on the blockchain.

### 3. `string public message = "Hello, world!";`

-   Declares a **state variable** called `message`.
-   It’s a `string` and is marked `public`, so anyone can read it.
-   Solidity automatically creates a **getter function** for public variables.

## 🧪 Try It Yourself

-   Deploy the contract using Remix (remix.ethereum.org).
-   View the value of `message` by clicking on the contract in the sidebar.

## ✅ Success Criteria

-   You’ve written your first Solidity contract.
-   You understand what each line in the contract does.
-   You know how to deploy and interact with it using Remix.

## ⏭️ Next Step

Modify the contract to allow changing the message using a function!
