export const lessons = [
  {
    id: 'java-basics',
    title: 'Java Basics: Variables and Data Types',
    description: 'Learn about fundamental Java concepts including variables and data types',
    content: `
      <h3>Variables in Java</h3>
      <p>Variables are containers for storing data values. In Java, there are different types of variables:</p>
      <ul>
        <li><strong>int</strong>: For integer values</li>
        <li><strong>double</strong>: For decimal numbers</li>
        <li><strong>String</strong>: For text values</li>
        <li><strong>boolean</strong>: For true/false values</li>
      </ul>
      
      <h3>Declaring Variables</h3>
      <p>In Java, you must declare a variable's type before using it:</p>
      <pre><code>
      int age = 25;
      double height = 1.75;
      String name = "John";
      boolean isStudent = true;
      </code></pre>
    `,
    exercise: 'Create variables of different types and print their values. Try modifying the values and observe the results.',
    initialCode: `public class VariablesExample {
    public static void main(String[] args) {
        // Create your variables here
        String name = "Your Name";
        int age = 20;
        double height = 1.75;
        boolean isStudent = true;
        
        // Print the values
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
        System.out.println("Is Student? " + isStudent);
        
        // Try modifying the values and printing again
    }
}`
  },
  {
    id: 'control-flow',
    title: 'Control Flow: If Statements and Loops',
    description: 'Master conditional statements and loops in Java',
    content: `
      <h3>If Statements</h3>
      <p>Conditional statements allow your program to make decisions:</p>
      <pre><code>
      if (condition) {
          // code to execute if condition is true
      } else {
          // code to execute if condition is false
      }
      </code></pre>

      <h3>Loops</h3>
      <p>Loops allow you to execute code multiple times:</p>
      <ul>
        <li><strong>for loop</strong>: Used when you know how many times to iterate</li>
        <li><strong>while loop</strong>: Used when you don't know the number of iterations</li>
      </ul>
      
      <h3>Examples</h3>
      <pre><code>
      // For loop
      for (int i = 0; i < 5; i++) {
          System.out.println(i);
      }

      // While loop
      int count = 0;
      while (count < 5) {
          System.out.println(count);
          count++;
      }
      </code></pre>
    `,
    exercise: 'Create a program that uses both if statements and loops. Print numbers from 1 to 10, but only if they are even.',
    initialCode: `public class ControlFlowExample {
    public static void main(String[] args) {
        // Write a loop that prints even numbers from 1 to 10
        // Hint: Use the modulo operator (%) to check if a number is even
        
        for (int i = 1; i <= 10; i++) {
            // Add your code here
        }
    }
}`
  },
  {
    id: 'arrays',
    title: 'Arrays and Collections',
    description: 'Learn how to work with arrays and basic collections in Java',
    content: `
      <h3>Arrays in Java</h3>
      <p>Arrays are used to store multiple values in a single variable:</p>
      <pre><code>
      // Declaring and initializing an array
      int[] numbers = {1, 2, 3, 4, 5};
      
      // Accessing array elements
      System.out.println(numbers[0]); // Prints 1
      
      // Creating an array with a specific size
      String[] names = new String[3];
      names[0] = "Alice";
      names[1] = "Bob";
      names[2] = "Charlie";
      </code></pre>

      <h3>Array Operations</h3>
      <ul>
        <li>Arrays have a fixed size that cannot be changed after creation</li>
        <li>Use array.length to get the size of an array</li>
        <li>Array indices start at 0</li>
      </ul>
    `,
    exercise: 'Create an array of numbers, calculate their sum and average, then print the results.',
    initialCode: `public class ArrayExample {
    public static void main(String[] args) {
        // Create an array of numbers
        int[] numbers = {5, 10, 15, 20, 25};
        
        // Calculate sum and average
        int sum = 0;
        
        // Add your code here
        
        // Print results
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + /* Calculate average here */);
    }
}`
  }
];