1. If given more time, what additional features or improvements would you add to the task management app?
   If I had extra time, I would consider these key upgrades:

User Login and Security: Adding a secure login and user management system, ideally with JWT-based token authentication, would ensure each user’s data is protected and allow for personalized task tracking. Integrating email verification with services like Nodemailer could further enhance security.

Task Reminders: Integrating automated notifications would help users remember upcoming deadlines. This could be done through email or app alerts, triggered by scheduled tasks or even by third-party notification services.

Dark and Light Mode Options: A theme toggle for dark and light modes would allow users to switch based on their preference, particularly useful for low-light environments. This could be implemented using CSS variables or theme-based styling.

Categorization and Filtering: Adding categories (like “Work,” “Home,” “Shopping”) and giving users the option to filter by these categories would make it easier to locate specific tasks quickly.

Advanced Search Capabilities: A more robust search function could include multiple filter criteria like priority, due date, or specific keywords in the title, making it easier to find tasks based on user-defined parameters.

2. How long did you spend working on the coding assignment?
   I spent around 8 hours working on this assignment. This time covered the entire process—from understanding the initial requirements and planning the design to implementing features, testing, and refining to ensure everything functioned smoothly.

3. What recent language feature do you find most valuable, and how have you used it?
   One recent improvement in JavaScript I find valuable is async/await, which streamlines asynchronous programming by making code much clearer and less prone to callback-related issues. It’s especially handy for managing data-fetching processes without the mess of nested .then() chains.

In React, JSX is an essential feature that makes creating UI components feel intuitive. With JSX, I can structure components in a way that closely resembles HTML, making the code more readable and maintainable.

// Fetching data with async/await in JavaScript
async function fetchUserData(userId) {
try {
const response = await fetch(`https://api.example.com/user/${userId}`);
const data = await response.json();
console.log(data);
} catch (error) {
console.error("Failed to fetch user data:", error);
}
}

// JSX Example in React for displaying user details
function UserProfile({ user }) {
return (
<div>
<h1>{user.name}</h1>
<p>{user.email}</p>
</div>
);
}

4. Describe how you would tackle a performance issue in a production environment. Have you faced this type of issue before?
   In the event of a performance problem in production, my approach would be as follows:

Log Analysis: I’d start by examining both client-side and server-side logs for any clues about failing components or lengthy load times that could pinpoint the issue.

Profiling Tools:

For frontend issues, I’d leverage browser developer tools, focusing on the "Performance" and "Network" tabs to evaluate load times, script execution speed, and network activity.
For backend bottlenecks, I’d turn to monitoring tools, which can help isolate problematic processes or slow-running services.
Memory Management and React Optimization: If working with React, I’d use React DevTools to detect unnecessary re-renders, which can slow down the UI. Proper memory management and unmounting cleanup within useEffect are also critical to preventing memory leaks.

Database and Query Optimization: Backend performance often hinges on database efficiency. I would analyze query performance and, if needed, optimize by adding indexes or caching frequently queried data to reduce load times.

Simulated Load Testing: I’d conduct load testing to observe how the app handles traffic spikes. This can reveal potential scalability issues and help pinpoint areas needing optimization.
