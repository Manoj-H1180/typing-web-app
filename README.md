# Touch Typing Web Application

##
#live link: `https://typing-web-app-red.vercel.app/`
##
This is a web-based application for touch typing, which allows users to practice typing without looking at the keyboard. The application focuses on practicing the 8 keys of the keyboard: 'a', 's', 'd', 'f', 'j', 'k', 'l', and ';'.

## Components and State

The application consists of the following components:
- `TouchTyping`: The main component that displays the typing interface and handles user input.
- `Navbar`: A component to display the timer.

The application uses Redux for state management. The initial state includes the following properties:
- `text`: Represents the text typed by the user.
- `timer`: Tracks the elapsed time in seconds.
- `isRunning`: Indicates whether the typing practice is in progress.
- `currentKeyIndex`: Represents the index of the current key being typed.

## Functionality

1. Render the `TouchTyping` component.
2. The typing interface will be displayed along with the designated keys to be typed.
3. The timer will initially show the elapsed time as "00:00:00".
4. As the user types the correct keys, the typed text will be displayed and the current key index will increment.
5. If the user types all the keys correctly, a congratulatory message will be displayed.
6. The timer will continue running as long as the typing practice is in progress.
7. To reset the typing practice, click the "Reset" button.
8. The timer will be reset to "00:00:00" and the typed text will be cleared.

## Usage

To use the application, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory. `cd typing-web-app`

3. Install the dependencies using npm. `npm install`

4. Start the development server. `npm start`

5. Open your browser and go to http://localhost:3000 to view the touch typing application.

6. The user can type the designated keys and see the typed text.
7. The timer starts when the user begins typing.
8. Once the user types all the keys, a congratulatory message is displayed.
9. The user can click the "Reset" button to start a new typing practice.

